const express = require('express')
const router = express.Router()

const profilecontroller = require('../controllers/profile')

 router.route('/profiles')
 	.get(profilecontroller.index)
 	.post(profilecontroller.store)

router.get('/profiles', profilecontroller.index)

module.exports = router