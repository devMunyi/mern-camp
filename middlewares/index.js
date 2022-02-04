const Post = require("../models/post");
const User = require("../models/user");
const expressJWT = require("express-jwt");

module.exports = {
  requireSignin: expressJWT({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
  }),

  canEditDeletePost: async (req, res, next) => {
    try {
      const post = await Post.findById({ _id: req.params._id });
      if (req.user._id != post.postedBy) {
        return res.status(401).json("Unauthorized");
      } else {
        next();
      }
    } catch (err) {
      console.log(err);
    }
  },

  //add follower middleware
  addFollower: async (req, res, next) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.body._id,
        {
          $addToSet: { followers: req.user._id },
        },
        { new: true }
      );

      await user.save();

      //console.log(user);
      if (!user) {
        return res.josn({
          error: "Error occured. Please try again",
        });
      } else {
        next();
      }
    } catch (err) {
      console.log(err);
    }
  },

  removeFollower: async (req, res, next) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.body._id,
        {
          $pull: { followers: req.user._id },
        },
        { new: true }
      );

      await user.save();

      //console.log(user);
      if (!user) {
        return res.josn({
          error: "Error occured. Please try again",
        });
      } else {
        next();
      }
    } catch (err) {
      console.log(err);
    }
  },
};
