const express = require('express')
const router = express.Router();

const UserService = require('../../service/user.service')

router.post('/register', UserService.register)

router.get('/getInfo', UserService.info)

module.exports = router;
