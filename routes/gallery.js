const express = require('express');
const { parser, requireSignin, adminMiddleware } = require('../common-middlewares');
const { addToGallery, allGallery } = require('../controllers/gallery');
const router = express.Router()


router.post('/add/gallery',requireSignin,adminMiddleware,parser,addToGallery)
router.get('/all/gallery',allGallery)

module.exports=router