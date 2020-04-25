const router = require('express').Router();
const passportLocal = require('./passportLocal');
const User = require('../model/User');

router.post('/api/login', passportLocal.login);

console.log("Creando usuario...");
User.createSelfUser(0, "Maki", "La perra", "maki@maki.com", "null", "test", "33333");

module.exports = router;