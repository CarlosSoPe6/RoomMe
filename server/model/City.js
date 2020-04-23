'use strict';

const DBClient = require('./DBClient');

/**
 * City model class.
 */
class City extends DBClient {

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

module.exports = City;
