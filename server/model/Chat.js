'use strict';

const DBClient = require('./DBClient');
const mongoose = require('../../config/mongo.conf');
const AutoIncrement = require('mongoose-sequence')(mongoose);

/**
 * Chat model class.
 */
class Chat extends DBClient {

    /**
     * Constructor method.
     */
    constructor() {
        super();
        this._schema = new mongoose.Schema({
            mid: {
                type: Number,
                unique: true
            },
            authorId: {
                type: Number,
                required: true
            },
            houseId: {
                type: Number,
                required: true
            },
            message: {
                type: String,
                required: true
            },
            time: {
                type: Date,
                required: true
            }
        });
        this._schema.plugin(AutoIncrement,{inc_field:'mid'});
        this._model = mongoose.model('Messages',this._schema);
    }

    async addMessage(newMessage) {
        let doc = new this._model(newMessage);
        return await this.add(doc);
    }

    async getMessages(houseId) {
        return await this.query({houseId:houseId},"",{});
    }
}

let chat = new Chat();
module.exports = chat;
