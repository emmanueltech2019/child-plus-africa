const express = require('express');
const { parser, requireSignin, adminMiddleware } = require('../common-middlewares');
const { joinBee,allParticipants, submitData } = require('../controllers/spellingbee');
const router = express.Router()


router.post('/add/bee',joinBee)
router.put('/add/bee',submitData)
router.get('/all/participants',allParticipants)

module.exports=router