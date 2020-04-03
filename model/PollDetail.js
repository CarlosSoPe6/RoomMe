'use strict';

const DBClient = require('./DBClient');

/**
 * PollDetail model class.
 */
class PollDetail extends DBClient {
    
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
     * Question database field.
     * @type string
     */
    Question;

    /**
     * TypeId database field. FT to Type.
     * @type number
     */
    TypeId;

    /**
     * Constructor method.
     */
    constructor() {
        super();
    }
}

module.exports = PollDetail;
