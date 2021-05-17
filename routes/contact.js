const express = require('express');
const { contactus, allContact } = require('../controllers/contact');
const router = express.Router()


router.post('/contactus',contactus)
router.get('/contacts',allContact)

module.exports = router