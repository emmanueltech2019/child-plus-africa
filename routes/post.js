const express = require('express');
const router = express.Router()
const { getPosts, addPost, singlePost, addCommentToPost, reactToPost, editPost } = require('../controllers/posts');

const { requireSignin, adminMiddleware,parser, paginatedResults } = require('../common-middlewares');
const Post = require('../models/post');



router.get("/post",paginatedResults(Post,'posts'), getPosts)
router.post("/post/add",parser,requireSignin,adminMiddleware,addPost)
router.get("/post/:id",singlePost)
router.post("/post/:id/comment",addCommentToPost)
router.post("/post/:id/like", reactToPost)
router.patch('/post/update/:id',editPost)

module.exports=router