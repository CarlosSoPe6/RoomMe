const router = require('express').Router();
const passportLocal = require('./passportLocal');
const User = require('../model/User');

router.post('/api/login', passportLocal.login);

module.exports = router;