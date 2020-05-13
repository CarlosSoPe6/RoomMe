const passport = require('passport');
const localStrategy = require('passport-local');
const jwt = require('jsonwebtoken');
const User = require('../model/User');


// User login
passport.use(new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async function(email, password, done) {
    let usr = await User.getSingleUser({
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
    console.log(req.body);
    passport.authenticate('local', (err, user, info) => {
        if(err) {
            res.send(401);
        }
        console.log("Logueando a: ", user);
        if(user) {
            let token = jwt.sign({email : user.email}, 'secret', {expiresIn: '1h'});
            req.logIn(user, function(err) {
                if (err) { 
                    return next(err); 
                }
                res.send({token});
              });
        } else {
            res.status(401).send(info);
        }
    })(req, res);
}

passport.serializeUser((usr, done) => {
    done(null, usr.email);
});

passport.deserializeUser(async (email,done) => {
    let usr = await User.getSingleUser({email});
    console.log("deserializando a: ", usr);
    done(null,usr);
});

module.exports = {login};