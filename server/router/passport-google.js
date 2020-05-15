const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const googleConfig = require('../../config/config');
const User = require('../model/User');
const jwt = require('jsonwebtoken');


passport.use(new GoogleStrategy({
    clientID: googleConfig.clientID,
    clientSecret: googleConfig.clientSecret,
    callbackURL: 'https://room-me-app.herokuapp.com/auth/google/redirect'
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
        if(err) {
            res.send(401);
        }
        console.log(user);
        if(user) {
            let token = jwt.sign({email : user.email}, 'secret', {expiresIn: '1h'});
            req.logIn(user, function(err) {
                if (err) { 
                    return next(err); 
                }
                res.send({token})
              });
        } else {
            res.status(401).send(info);
        }
    })(req, res);
}

module.exports = {googleLogin};