const express = require("express");
const {
  registerUser,
  authUser,
  updateUserProfile,
  getUsers,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/all").get(getUsers);
router.route("/login").post(authUser);
router.route("/profile").post(protect, updateUserProfile);

module.exports = router;
