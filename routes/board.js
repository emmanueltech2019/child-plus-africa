const express = require('express');
const { parser, requireSignin, adminMiddleware } = require('../common-middlewares');
const { addToBoard, allBoard } = require('../controllers/board');
const router = express.Router()


router.post('/add/board',requireSignin,adminMiddleware,parser,addToBoard)
router.get('/all/board',allBoard)

module.exports=router