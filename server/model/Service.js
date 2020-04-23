'use strict';

const DBClient = require('./DBClient');

/**
 * Service model class.
 */
class Service extends DBClient {
    
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
     * Constructor method;
     */
    constructor() {
        super();
    }
}

module.exports = Service;
