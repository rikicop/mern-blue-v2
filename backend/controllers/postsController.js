const Post = require("../models/postModel");
const asyncHandler = require("express-async-handler");

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.user._id });
  res.json(posts);
});

const createPost = asyncHandler(async (req, res) => {
  const { title, content, category, pic } = req.body;

  if (!title || !content || !category || !pic) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
    return;
  } else {
    const post = new Post({
      user: req.user._id,
      title,
      content,
      category,
      pic,
    });

    const createdPost = await post.save();

    res.status(201).json(createdPost);
  }
});

const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

const UpdatePost = asyncHandler(async (req, res) => {
  const { title, content, category, pic } = req.body;
  const post = await Post.findById(req.params.id);

  if (post.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Yo can't perform this action");
  }

  if (post) {
    post.title = title;
    post.content = content;
    post.category = category;
    post.pic = pic;

    const updatedPost = await post.save();
    res.json(updatedPost);
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

const DeletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  /*  if (!post) {
    res.json({ message: "Post not found" });
  } */
  if (post.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Yo can't perform this action");
  }
  if (post) {
    await post.remove();
    res.json({ message: "Post removed" });
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

module.exports = { getPosts, createPost, getPostById, UpdatePost, DeletePost };
