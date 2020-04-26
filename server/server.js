'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('../config/config');
const cookieSession = require('cookie-session');
const app = express();

const mongo = require('./../config/mongo.conf');

const userRouter = require('./router/user.router');
const authRouter = require('./router/auth.router')

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.cookieKey]  
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/', authRouter);

app.listen(3000, () => console.log("Escuchandote en el puerto " + 3000));
