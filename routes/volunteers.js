const express = require('express');
const { parser, requireSignin, adminMiddleware } = require('../common-middlewares');
const { addToVolunters, allVolunteers } = require('../controllers/volunteers');
const router = express.Router()


router.post('/add/volunteers',requireSignin,adminMiddleware,parser,addToVolunters)
router.get('/all/volunteers',allVolunteers)

module.exports=router