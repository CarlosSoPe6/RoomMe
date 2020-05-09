const router = require('express').Router();
const passportLocal = require('./passportLocal');
const passportGoogle = require('./passport-google');
const passport = require('passport');
const User = require('../model/User');

router.post('/api/login', passportLocal.login);
router.get('/google/login', passport.authenticate('google', {
    scope:['profile', 'email']
}));
router.get('/google/redirect', passportGoogle.googleLogin);

module.exports = router;