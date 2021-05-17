const express = require('express');
const { parser, requireSignin, adminMiddleware } = require('../common-middlewares');
const { addToProject, allProject } = require('../controllers/projects');
const router = express.Router()


router.post('/add/project',requireSignin,adminMiddleware,parser,addToProject)
router.get('/all/project',allProject)

module.exports=router