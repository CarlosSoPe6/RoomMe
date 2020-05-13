const router = require('express').Router();
const passportLocal = require('./passportLocal');
const passportGoogle = require('./passport-google');
const passport = require('passport');

router.post('/api/login', passportLocal.login);
router.get('/api/google/login', passport.authenticate('google', {
    scope:['profile', 'email']
}));
router.get('/api/google/redirect', passportGoogle.googleLogin);
router.get('/api/logout', (req, res) => {
    req.logOut();
    res.send({msg : "Log out"});
});

module.exports = router;