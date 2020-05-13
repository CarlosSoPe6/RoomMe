'use strict';

const DBClient = require('./DBClient');

/**
 * Roommates model class.
 */
class Roommates extends DBClient() {

    /**
     * Id database field.
     * @type number
     */
    Id;

    /**
     * UserId database field. FK to User
     * @type number
     */
    UserId;

    /**
     * HouseId database field. FK to House
     * @type number
     */
    HouseId;

    /**
     * Joint database field.
     * @type Date
     */
    Joint;

    /**
     * Constructor method.
     */
    constructor() {
        super();
    }
}

module.exports = Roommates;
