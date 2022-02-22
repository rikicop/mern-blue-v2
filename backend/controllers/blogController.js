const Post = require("../models/postModel");
const asyncHandler = require("express-async-handler");

const getBlogs = asyncHandler(async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
});

const getBlogById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

module.exports = { getBlogs, getBlogById };
