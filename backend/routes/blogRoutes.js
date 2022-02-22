const express = require("express");
const { getBlogs, getBlogById } = require("../controllers/blogController");
const router = express.Router();

router.route("/").get(getBlogs);
router.route("/:id").get(getBlogById);

module.exports = router;
