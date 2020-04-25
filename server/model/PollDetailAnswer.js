'use strict';

const DBClient = require('./DBClient');

/**
 * PollDetailAnswer model class.
 */
class PollDetailAnswer extends DBClient {
    
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
     * PollDetailId database field. FK to PollDetail.
     * @type number
     */
    PollDetailId;

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

module.exports = PollDetailAnswer;
