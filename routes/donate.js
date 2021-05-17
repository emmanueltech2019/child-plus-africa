const express = require('express');
const { addToDonation, allDonations } = require('../controllers/donate');
const router = express.Router()


router.post('/add/donate',addToDonation)
router.get('/all/donate',allDonations)

module.exports=router