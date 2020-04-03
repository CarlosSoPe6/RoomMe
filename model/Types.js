'use strict';

const DBClient = require('./DBClient');

/**
 * Types model class.
 */
class Types extends DBClient {

    /**
     * Id database field.
     * @type number
     */
    Id;

    /**
     * Name database field.
     * @type string
     */
    Name;

    /**
     * Constructor method.
     */
    constructor() {
        super();
    }
}

module.exports = Types;
