const express = require("express");
const {
  getPosts,
  createPost,
  getPostById,
  UpdatePost,
  DeletePost,
} = require("../controllers/postsController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").get(protect, getPosts);
router.route("/create").post(protect, createPost);
router
  .route("/:id")
  .get(getPostById)
  .put(protect, UpdatePost)
  .delete(protect, DeletePost);

module.exports = router;
