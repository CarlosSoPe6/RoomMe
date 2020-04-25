const passport = require('passport');
const localStrategy = require('passport-local');
const jwt = require('jsonwebtoken');
const User = require('../model/User');

passport.use(new localStrategy({
    usernameField: 'email',
    passwordField: 'passwordHash'
}, function(email, password, done) {
    let usr = User.getSingleUser({
        email : email,
        passwordHash : password
    });
    
    if(usr) {
       done(null, usr); 
    } else {
        done(null, false, {error: "Usuario inexistente o datos incorrectos"});
    }
}));

function login(req, res) {
    passport.authenticate('local', (err, user, info => {
        if(user) {
            let token = jwt.sign({email : user.email}, 'secret', {expiresIn: '1h'});
            res.send({token})
        } else {
            res.status(401).send(info);
        }
    }))(req, res);
}


module.exports = {login};