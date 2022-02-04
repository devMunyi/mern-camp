const User = require("../models/user");
const { comparePassword, hashPassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");
const { nanoid } = require("nanoid");

module.exports = {
  register: async (req, res) => {
    //console.log("REGISTER ENDPOINT = >", req.body);
    const { name, email, password, cpassword, secret } = req.body;

    //Validation
    //validate name
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }

    //validate email
    if (!email) {
      return res.json({
        error: "Email is required",
      });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email already taken",
      });
    }

    //validate password
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6 characters long",
      });
    }

    if (!cpassword) {
      return res.json({
        error: "Confirm password is required",
      });
    }
    if (cpassword !== password) {
      return res.json({
        error: "Passwords don't match",
      });
    }

    //validate secret
    if (!secret) {
      return res.json({
        error: "Question answer is required",
      });
    }

    //hash password
    const hashedPassword = await hashPassword(password);

    //now create a new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      secret,
      username: nanoid(6), //random unique username of 6 characters
    });

    try {
      await user.save();
      //console.log("REGISTERD USER => ", user);
      return res.json({
        ok: true,
      });
    } catch (error) {
      console.log("REGISTER FAILED => ", error);
      return res.status(400).send("Error. Try again.");
    }
  },

  login: async (req, res) => {
    //console.log(req.body);
    try {
      const { email, password } = req.body;
      //check if db ha user with that email
      const user = await User.findOne({ email });
      if (!user) {
        return res.json({
          error: "No user found",
        });
      }

      //if user found with given email id, check if password matches
      const match = await comparePassword(password, user.password);
      if (!match) {
        return res.json({
          error: "Wrong password",
        });
      }

      //if password matches go ahead and generate token to identify logged in user
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      user.password = undefined;
      user.secret = undefined;

      res.json({
        token,
        user,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).send("Error. Try again.");
    }
  },

  currentUser: async (req, res) => {
    //console.log(req.user);
    try {
      const user = await User.findById(req.user._id);
      //res.json(user);
      res.json({ ok: true });
    } catch (error) {
      res.sendStatus(400);
    }
  },

  forgotPassword: async (req, res) => {
    //console.log(req.body);
    const { email, newPassword, cnewPassword, secret } = req.body;

    //validation
    if (!email) {
      return res.json({
        error: "Email is required",
      });
    }

    if (!newPassword || newPassword.length < 6) {
      return res.json({
        error: "New password is required and should be min 6 characters",
      });
    }

    if (!cnewPassword || cnewPassword !== newPassword) {
      return res.json({
        error:
          "Confirm new password is required and should be same as new password",
      });
    }

    if (!secret) {
      return res.json({
        error: "Answer to secret question is required",
      });
    }

    const user = await User.findOne({ email, secret });

    if (!user) {
      return res.json({
        error:
          "We can't verify you with those details. Please re-enter the details and try again",
      });
    }

    try {
      const hashed = await hashPassword(newPassword);
      await User.findByIdAndUpdate(user._id, { password: hashed });
      return res.json({
        success: "Congrats! You can now login with your new password",
      });
    } catch (err) {
      console.log(err);
      return res.json({
        error: "Something went wrong. Try again.",
      });
    }
  },

  profileUpdate: async (req, res) => {
    const { image, username, name, about, password, cpassword, secret } =
      req.body;
    try {
      //console.log("Profile update request body", req.body);
      const data = {};

      if (image) {
        data.image = image;
      }

      if (username) {
        data.username = username;
      }

      /*
      Email not to be updated 
      if (email) {
        data.email = email;
      }
      */

      if (name) {
        data.name = name;
      }

      if (about) {
        data.about = about;
      }

      if (password) {
        if (password.length < 6) {
          return res.status(400).json({
            error: "Password should be min six characters long",
          });
        } else if (!cpassword) {
          return res.status(400).json({
            error: "Confirm password is required",
          });
        } else if (password != cpassword) {
          return res.status(400).json({
            error: "Passwords should match",
          });
        } else {
          const hash = await hashPassword(password);
          data.password = hash;
        }
      }

      if (secret) {
        data.secret = secret;
      }

      //now update the database
      let user = await User.findByIdAndUpdate(req.user._id, data, {
        new: true,
      }); //{new: true} ensure you are returning the updated info to client side

      user.password = undefined;
      user.secret = undefined;
      res.json(user);
      //console.log("Updated user =>", user);
    } catch (err) {
      if (error.code == 11000) {
        return res.json({
          error: "Duplicate username",
        });
      }
      console.log(err);
    }
  },

  findPeople: async (req, res) => {
    try {
      const user = await User.findById(req.user._id); //exclude yourself or the logged in user

      //user.following
      let following = user.following; //avails all id of users being followed by current logged in user
      following.push(user._id); //Add yourself to the array of following

      const people = await User.find({ _id: { $nin: following } })
        .select("-password -secret")
        .limit(10);
      res.json(people);
    } catch (err) {
      console.log(err);
    }
  },

  userFollow: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.user._id,
        {
          $addToSet: { following: req.body._id },
        },
        { new: true }
      ).select("-password -secret");

      await user.save();

      if (!user) {
        return res.json({
          error: "Error ocuured. Please try again",
        });
      } else {
        return res.json(user);
      }
    } catch (err) {
      console.log(err);
    }
  },

  userFollowing: async (req, res) => {
    try {
      const user = await User.findById(req.user._id);

      const following = await User.find({ _id: { $in: user.following } })
        .select("-password -secret")
        .sort({ name: -1 })
        .limit(100);

      res.json(following);
    } catch (err) {
      console.log(err);
    }
  },

  userUnfollow: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.user._id,
        { $pull: { following: req.body._id } },
        {
          new: true,
        }
      );
      //console.log(user);
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  },
};
