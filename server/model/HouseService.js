'use strict';

const DBClient = require('./DBClient');

/**
 * HouseService model class.
 */
class HouseService extends DBClient {

    /**
     * @type number
     */
    HouseId;

    /**
     * @type number
     */
    ServiceId;

    /**
     * Constructor Method.
     */
    constructor() {
        super();
    }
}

module.exports = HouseService;
