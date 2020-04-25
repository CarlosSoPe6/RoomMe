'use strict';

const express = require('express');
const app = express();

const mongo = require('./../config/mongo.conf');

const userRouter = require('./router/user.router');
const authRouter = require('./router/auth.router')

app.use('/user', userRouter);
app.use('/', authRouter);

app.listen(3000, () => console.log("Escuchandote en el puerto " + 3000));
