'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('../config/config');
const cookieSession = require('cookie-session');
const app = express();

const mongo = require('./../config/mongo.conf');

const authRouter = require('./router/auth.router');
const contactRouter = require('./router/contact.router');
const pollRouter = require('./router/poll.router');
const registerRouter = require('./router/register.router');
const taskRouter = require('./router/task.router');
const userRouter = require('./router/user.router');

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.cookieKey]  
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());

app.use('/contact', contactRouter);
app.use('/poll', pollRouter);
app.use('/user', userRouter);
app.use('/register', registerRouter);
app.use('/', authRouter);
app.use('/api/tasks', taskRouter);

app.listen(3000, () => console.log("Escuchandote en el puerto " + 3000));
