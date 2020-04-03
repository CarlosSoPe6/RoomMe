'use strict';

const DBClient = require('./DBClient');

/**
 * PollAnswerDetail model class.
 */
class PollAnswerDetail extends DBClient {

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
     * ValueText database field.
     * @type string
     */
    ValueText;

    /**
     * ValueNumber database field.
     * @type number
     */
    ValueNumber;

    /**
     * ValueDatetime database field.
     * @type Date
     */
    ValueDatetime;

    /**
     * Constructor method.
     */
    constructor() {
        super();
    }
}

module.exports = PollAnswerDetail;
