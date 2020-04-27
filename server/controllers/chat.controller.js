'use strict'

const chat = require('../model/Chat');

class ChatControl {
    async getChatMessages(req,res) {
        let messages = await chat.getMessages(req.user.house); 
        res.json(messages);
    }
}

const ChatController = new ChatControl();
module.exports = ChatController;