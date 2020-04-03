'use strict';

const DBClient = require('./DBClient');

/**
 * Chat model class.
 */
class Chat extends DBClient {

    /**
     * @type number
     */
    Id;

    /**
     * FK to User.
     * @type number
     */
    AuthorId;

    /**
     * FK to House.
     * @type number
     */
    HouseId;

    /**
     * @type string
     */
    Message;

    /**
     * @type Date
     */
    Time;

    /**
     * Constructor method.
     */
    constructor() {
        super();
    }
}

module.exports = Chat;