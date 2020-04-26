'use strict'

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const bodyParser = require('body-parser');
const mongo = require('./../config/mongo.conf');

const userRouter = require('./router/user.router');
const authRouter = require('./router/auth.router')
const houseRouter = require('./router/house.router');
const serviceRouter = require('./router/service.router');
const shopRouter = require('./router/shopping.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/user', userRouter);
app.use('/', authRouter);
app.use('/house',houseRouter);
app.use('/service',serviceRouter);
app.use('/shoplist',shopRouter);


http.listen(3000, ()=> console.log("Server running!"));





