const express = require('express');
const { parser,parserMany, requireSignin, adminMiddleware } = require('../common-middlewares');
const { addToGallery, allGallery,editSingleGalleryImage, addToSingleGallery,singleGallery } = require('../controllers/gallery');
const router = express.Router()


router.post('/add/gallery',requireSignin,adminMiddleware,parser,addToGallery)
router.post('/update/gallery/:id',requireSignin,adminMiddleware,parserMany,addToSingleGallery)
router.get('/all/gallery',allGallery)
router.get('/single/gallery/:id',singleGallery)
router.post('/update/single/gallery/images',parser,editSingleGalleryImage)

module.exports=router