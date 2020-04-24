'use strict';

const express = require('express');
const app = express();

const userRouter = require('./router/user.router');

app.use('/user', userRouter);
