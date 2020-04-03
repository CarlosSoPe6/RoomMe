'use strict';

const DBClient = require('./DBClient');

/**
 * PollAnswer model class.
 */
class PollAnswer extends DBClient {

    /**
     * Id database field.
     * @type number
     */
    Id;

    /**
     * PollId database field. FK to Poll.
     * @type number
     */
    PollId;

    /**
     * UserId database field. FK to User.
     * @type number
     */
    UserId;
    
    /**
     * AnswerdAt databaser field.
     * @type Date
     */
    AnswerdAt;

    /**
     * Constructor method.
     */
    constructor() {
        super()
    }
}

module.exports = PollAnswer;
