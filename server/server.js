'use strict'

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const bodyParser = require('body-parser');
const mongo = require('./../config/mongo.conf');

const houseRouter = require('./router/house.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/house',houseRouter);


http.listen(3000, ()=> console.log("Server running!"));
