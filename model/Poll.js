'use strict';

const DBClient = require('./DBClient');

/**
 * Poll model class.
 */
class Poll extends DBClient {
    
    /**
     * Id database field.
     * @type number
     */
    Id;

    /**
     * Title database field.
     * @type string
     */
    Title;

    /**
     * Description database field.
     * @type string
     */
    Descrption;

    /**
     * CreatedBy database field. FK to user.
     * @type number
     */
    CreatedBy;

    /**
     * HouseId database field. FK to House
     * @type number
     */
    HouseId;

    /**
     * CreatedAt database field.
     * @type Date
     */
    CreatedAt;


    /**
     * Constructor method.
     */
    constructor() {
        super();
    }
}

module.exports = Poll;
