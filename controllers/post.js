const Post = require("../models/post");
const User = require("../models/user");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

module.exports = {
  createPost: async (req, res) => {
    //console.log("Post =>", req.body);
    const { content, image } = req.body;
    //validation
    if (!content.length) {
      return res.json({
        error: "Post content is required",
      });
    }

    try {
      const post = new Post({ content, image, postedBy: req.user._id });
      post.save();
      return res.json(post);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },

  uploadImage: async (req, res) => {
    //console.log("Req files=>", req.files);
    try {
      let result = await cloudinary.uploader.upload(req.files.image.path);
      //console.log("uploaded image url =>", result);

      if (result && result.url && result.public_id) {
        return res.status(200).json({
          url: result.secure_url,
          public_id: result.public_id,
        });
      } else {
        return res.status(400).json({
          success: false,
          error: "Error occured while uploading image. Try again.",
        });
      }
    } catch (err) {
      console.log(err);
      if (err.error.code == "ENOTFOUND") {
        return res.json({
          success: false,
          error:
            "Error occured while uploading image. Please ensure you have internet connection and try again.",
        });
      }
    }
  },

  postsByUser: async (req, res) => {
    //console.log(req.body);
    try {
      //const posts = await Post.find({ postedBy: req.user._id })
      const posts = await Post.find()
        .populate("postedBy", "_id name image")
        .sort({ createdAt: -1 })
        .limit(10);
      return res.status(200).json(posts);
    } catch (err) {
      console.log(err);
    }
  },

  userPost: async (req, res) => {
    try {
      const post = await Post.findById({ _id: req.params._id });
      res.json(post);
    } catch (err) {
      console.log(err);
    }
  },

  updatePost: async (req, res) => {
    const { content, image } = req.body;
    try {
      const post = await Post.findByIdAndUpdate(
        req.params._id,
        { content, image },
        {
          new: true,
        }
      );

      //remove previous image from cloudinary
      if (post.image && post.image.public_id) {
        const image = await cloudinary.uploader.destroy(post.image.public_id);
      }

      return res.json(post);
    } catch (err) {
      console.log(err);
    }
  },

  deletePost: async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params._id);

      //remove image from cloudinary
      if (post.image && post.image.public_id) {
        const image = await cloudinary.uploader.destroy(post.image.public_id);
      }
      return res.json({ ok: true });
    } catch (err) {
      console.log(err);
    }
  },

  newsFeed: async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
      //console.log(user);
      let following = user.following;
      following.push(req.user._id);

      const posts = await Post.find({ postedBy: { $in: following } })
        .populate("postedBy", "_id name image")
        .sort({ createdAt: -1 })
        .limit(10);

      res.json(posts);
    } catch (err) {
      console.log(err);
    }
  },

  likePost: async (req, res) => {
    try {
      const post = await Post.findByIdAndUpdate(
        req.body._id,
        {
          $addToSet: { likes: req.user._id },
        },
        { new: true }
      );

      await post.save();
      res.json(post);
    } catch (err) {
      console.log(err);
    }
  },

  unlikePost: async (req, res) => {
    try {
      const post = await Post.findByIdAndUpdate(
        req.body._id,
        {
          $pull: { likes: req.user._id },
        },
        { new: true }
      );

      await post.save();
      res.json(post);
    } catch (err) {
      console.log(err);
    }
  },
};
