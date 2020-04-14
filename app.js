'use strict'

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

const houseRouter = require('./routes/house.router');

http.listen(3000, ()=> console.log("Server running!"));