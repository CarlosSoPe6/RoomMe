'use strict';

const express = require('express');
const app = express();

const mongo = require('./../config/mongo.conf');

const userRouter = require('./router/user.router');

app.use('/user', userRouter);
