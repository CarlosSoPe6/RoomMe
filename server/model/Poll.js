'use strict';

const DBClient = require('./DBClient');
const mongoose = require('./../../config/mongo.conf');
const AutoIncrement = require('mongoose-sequence')(mongoose);
/**
 * Poll model class.
 */
class Poll extends DBClient {
    
    /**
     * Constructor method.
     */
    constructor() {
        super();

        this._schema = new mongoose.Schema({
            uid: {
                type: Number,
                unique: true
            },
            title: {
                type: String,
                required: true
            },
            descrption: {
                type: String,
                required: true
            },
            createdBy: {
                type: Number,
                required: true
            },
            houseId: {
                type: Number,
                required: true
            },
            createdAt: {
                type: Date,
                required: true,
                default: Date.now
            },
            questions:[
                {
                    question: String,
                    options: Array
                }
            ]
        });
        this._schema.plugin(AutoIncrement, {inc_field : 'uid'});
        this._model = mongoose.model('poll', this._schema);
        /**
         * Id database field.
         * @type number
         */
        this.uid;

        /**
         * Title database field.
         * @type string
         */
        this.title;

        /**
         * Description database field.
         * @type string
         */
        this.descrption;

        /**
         * CreatedBy database field. FK to user.
         * @type number
         */
        this.createdBy;

        /**
         * HouseId database field. FK to House
         * @type number
         */
        this.houseId;

        /**
         * CreatedAt database field.
         * @type Date
         */
        this.createdAt;

        /**
         * Questons array.
         * @type PollQuestion[]
         */
        this.questions;
    }

    /**
     * Creates a poll record.
     * @param {string} title
     * @param {string} descrption
     * @param {number} createdBy
     * @param {number} houseId
     * @param {Date} createdAt
     * @param {PollQuestion[]} questions
     */
    async create(title, descrption, createdBy, houseId, createdAt, questions) {
        let record = new this._model({
            title,
            descrption,
            createdBy,
            houseId,
            createdAt,
            questions
        });
        return await super.add(record);
    }

    async getByHouse(houseId) {
        let query = {
            'houseId': houseId
        }
        await super.query(query);
    }

    async getSingle(uid) {
        let query = {
            'uid': uid
        }
        await super.query(query);
    }

    async pollUpdate() {

    }

    async pollDelete(uid) {
        let query = {
            'uid': uid
        }
        await super.delete(query);
    }
}

class PollQuestion {
    constructor() {
        this.question;
        this.options;
    }
}

module.exports = Poll;
