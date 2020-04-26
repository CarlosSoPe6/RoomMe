const route = require('express').Router();
const ChatController = require('../controllers/chat.controller');

route.get('/',ChatController.getChatMessages);

module.exports = route;