'use strict';

const DBClient = require('./DBClient');

/**
 * Contact model class.
 */
class Contact extends DBClient {
    
    /**
     * @type number
     */
    Id;

    /**
     * FK to user.
     * @type number
     */
    UserId;

    /**
     * FK to user.
     * @type number
     */
    ContactId;

    /**
     * @type string
     */
    Name;

    /**
     * @type string
     */
    LastName;

    /**
     * @type string
     */
    Email;

    /**
     * @type string
     */
    Phone;

    /**
     * Constructor mthod.
     */    
    constructor() {
        super();
    }
}

module.exports = new Contact();
