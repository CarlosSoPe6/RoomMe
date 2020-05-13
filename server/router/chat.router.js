const route = require('express').Router();
const ChatController = require('../controllers/chat.controller');
const requireAuth = require('./../middlewares/requireAuth');

route.get('/', requireAuth, ChatController.getChatMessages);

module.exports = route;