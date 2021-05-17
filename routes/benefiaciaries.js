const express = require('express');
const { parser, requireSignin, adminMiddleware } = require('../common-middlewares');
const { addToBeneficiaries, allBeneficiaries } = require('../controllers/benefiaciaries');
const router = express.Router()


router.post('/add/beneficiaries',requireSignin,adminMiddleware,parser,addToBeneficiaries)
router.get('/all/beneficiaries',allBeneficiaries)

module.exports=router