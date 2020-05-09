const router = require('express').Router();
const passportLocal = require('./passportLocal');
const passportGoogle = require('./passport-google');
const passport = require('passport');

router.post('/api/login', passportLocal.login);
router.get('/api/google/login', passport.authenticate('google', {
    scope:['profile', 'email']
}));
router.get('/auth/google/redirect', passportGoogle.googleLogin);

module.exports = router;