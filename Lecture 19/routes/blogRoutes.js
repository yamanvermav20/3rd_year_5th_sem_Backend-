const express = require("express");
const router = express.Router(); //smal --> app
// const Blog = require("../model/blog");
// const User = require("../model/user");  
let {postAddBlog, getAllBlog, getOneBlog, deleteOneBlog} = require("../controller/blogController");


router.post("/", postAddBlog)
router.delete("/:blogId", deleteOneBlog)
router.get("/", getAllBlog)
router.get("/:id", getOneBlog)



module.exports = router
