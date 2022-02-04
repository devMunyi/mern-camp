const express = require("express");
const router = express.Router();

//controllers
const {
  register,
  login,
  currentUser,
  forgotPassword,
  profileUpdate,
  findPeople,
  userFollow,
  userFollowing,
  userUnfollow,
} = require("../controllers/auth");

//middlewares
const {
  requireSignin,
  addFollower,
  removeFollower,
} = require("../middlewares");

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.get("/current-user", requireSignin, currentUser);

router.put("/profile-update", requireSignin, profileUpdate);
router.get("/find-people", requireSignin, findPeople);
router.put("/user-follow", requireSignin, addFollower, userFollow);
router.put("/user-unfollow", requireSignin, removeFollower, userUnfollow);
router.get("/user-following", requireSignin, userFollowing);

module.exports = router;
