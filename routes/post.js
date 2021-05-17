const express = require('express');
const router = express.Router()
const { getPosts, addPost, singlePost, addCommentToPost, reactToPost } = require('../controllers/posts');

const { requireSignin, adminMiddleware,parser } = require('../common-middlewares');



router.get("/post", getPosts)

router.post("/post/add",parser,requireSignin,adminMiddleware,addPost)
router.get("/post/:id",singlePost)
router.post("/post/:id/comment",addCommentToPost)
router.post("/post/:id/like", reactToPost)

module.exports=router