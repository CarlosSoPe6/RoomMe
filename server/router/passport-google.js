const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const googleConfig = require('./google-config');
const User = require('../model/User');


passport.use(new GoogleStrategy({
    clientID: googleConfig.clientID,
    clientSecret: googleConfig.clientSecret,
    callbackURL: 'http://localhost:3000/google/redirect'
}, async function(accessToken, refreshToken, profile, done) {
    if(profile == null) {
        done(null, false, {error: "No fie posible autenticarse"});
        return;
    }

    let newUser = {
        name: profile._json.given_name,
        lastName: profile._json.family_name,
        email: profile._json.email,
        photo: profile._json.picture
    }

    let findUser = await User.getSingleUser({email: newUser.email});

    if(findUser) {
        done(null, findUser);
        return;
    } else {
        await User.createSelfUser(
            newUser.name, 
            newUser.lastName, 
            newUser.email, 
            newUser.photo, 
            'newUser.password', 
            ''
            );
        done(null, newUser);
    }
}));

function googleLogin(req, res) {
    console.log("Entrando a google login");

    passport.authenticate('google', (err, user, info) => {
        console.log("Entrando a google strategy");
        console.log(user);
        res.send(200);
    })(req, res);
}

module.exports = {googleLogin};