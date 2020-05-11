'use strict'

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('../config/config');
const cookieSession = require('cookie-session');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const mongo = require('./../config/mongo.conf');
require('../config/cloudinary.config');

//const userRouter = require('./router/user.router');
const houseRouter = require('./router/house.router');
const serviceRouter = require('./router/service.router');
const shopRouter = require('./router/shopping.router');
const chatRouter = require('./router/chat.router');
const userRouter = require('./router/user.router');
const authRouter = require('./router/auth.router');
const contactRouter = require('./router/contact.router');
const pollRouter = require('./router/poll.router');
const registerRouter = require('./router/register.router');
const taskRouter = require('./router/task.router');
const imageRouter = require('./router/images.router');
const authMiddle = require('./middlewares/requireAuth')
const cityRouter = require('./router/city.router');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

console.log(__dirname);
app.use(express.static(__dirname + '/public'));

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.cookieKey]  
}));

app.use(passport.initialize());
app.use(passport.session());

//app.use('/user', userRouter);
app.use('/', authRouter);
app.use('/house',houseRouter);
app.use('/service',serviceRouter);
app.use('/shoplist',shopRouter);
app.use('/chat',chatRouter);

app.use('/contact', contactRouter);
app.use('/poll', pollRouter);
app.use('/user', userRouter);
app.use('/api/register', registerRouter);
app.use('/api/tasks', authMiddle, taskRouter);
app.use('/image', imageRouter);
app.use('/city',cityRouter);

io.on('connection', function(socket){
    const chat = require('./router/chat_operation')(socket, io);
});

app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'));

http.listen(3000, ()=> console.log("Server running!"));

module.exports = app;









