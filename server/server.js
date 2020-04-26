'use strict';

const express = require('express');
const app = express();

const mongo = require('./../config/mongo.conf');

const userRouter = require('./router/user.router');
const authRouter = require('./router/auth.router')
const contactRouter = require('./router/contact.router');
const pollRouter = require('./router/poll.router');

app.use('/contact', contactRouter);
app.use('/poll', pollRouter);
app.use('/user', userRouter);
app.use('/', authRouter);

app.listen(3000, () => console.log("Escuchandote en el puerto " + 3000));
