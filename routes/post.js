const express = require("express");
const router = express.Router();
const formidable = require("express-formidable");

//controllers
const {
  createPost,
  uploadImage,
  postsByUser,
  userPost,
  updatePost,
  deletePost,
  newsFeed,
  likePost,
  unlikePost,
} = require("../controllers/post");

//middlewares
const { requireSignin, canEditDeletePost } = require("../middlewares");

router.post("/create-post", requireSignin, createPost);
router.post(
  "/upload-image",
  requireSignin,
  formidable({ maxFileSize: 5 * 1024 * 1024 }),
  uploadImage
);

//posts
//router.get("/user-posts", requireSignin, postsByUser);
router.get("/user-post/:_id", requireSignin, userPost);
router.put("/update-post/:_id", requireSignin, canEditDeletePost, updatePost);
router.delete(
  "/delete-post/:_id",
  requireSignin,
  canEditDeletePost,
  deletePost
);

router.get("/news-feed", requireSignin, newsFeed);

router.put("/like-post", requireSignin, likePost);
router.put("/unlike-post", requireSignin, unlikePost);

module.exports = router;
