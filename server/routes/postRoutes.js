const express = require("express");
const router = express.Router();
const postAuth = require("../middleware/postAuth");
const {
  newPost,
  getPosts,
  updatePost,
  likes,
  getPost,
  addComment,
  getPrivatePosts,
  deletePost,
  deleteComment,
  getPublicPosts,
  getCUPosts,
  getCUComments,
} = require("../controllers/postControllers");



//Route add new post
router.post("/newpost", postAuth, newPost);
//get posts
router.get("/", getPosts);
//update posts
router.put("/update/:id", postAuth, updatePost);
//Like post
router.put("/likes/:id", postAuth, likes);
//get a single post
router.get("/post/:id", getPost);
//add comment
router.put("/post/comment/:id", postAuth, addComment)
//get private posts
router.get("/private", getPrivatePosts)
router.get("/public", getPublicPosts)
//get current user osts
router.get("/currentuserpost", postAuth, getCUPosts)

//delete post
router.delete("/deletePost/:id", deletePost);
//delete comment
router.put("/post/comment/delete/:id", deleteComment)
router.put("/post/currentusercomments/", postAuth, getCUComments)


module.exports = router;
