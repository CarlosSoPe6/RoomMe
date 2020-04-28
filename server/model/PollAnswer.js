'use strict';

const DBClient = require('./DBClient');
const mongoose = require('./../../config/mongo.conf');

/**
 * PollAnswer model class.
 */
class PollAnswer extends DBClient {
    /**
     * Constructor method.
     */
    constructor() {
        super();
        this._schema = new mongoose.Schema({
            pollId: {
                type: Number,
                required: true
            },
            userId: {
                type: Number,
                required: true
            },
            answers: {
                type: Array,
                required: true
            }
        });
        this._model = mongoose.model('pollAnswer', this._schema);

        /**
         * PollId database field. FK to Poll.
         * @type number
         */
        this.pollId;

        /**
         * UserId database field. FK to User.
         * @type number
         */
        this.userId;
        
        /**
         * AnswerdAt databaser field.
         * @type Array
         */
        this.answers;
    }

    async getAnswers(pollId) {
        let query = {
            'pollId': pollId
        }
        return await super.query(query);
    }

    async answer(pollId, userId, answers) {
        let record = new this._model({
            pollId,
            userId,
            answers
        });
        return await super.add(record);
    }
}

module.exports = new PollAnswer();
