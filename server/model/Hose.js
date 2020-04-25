'use strict';

const DBClient = require('./DBClient');

/**
 * House model class.
 */
class House extends DBClient {

    /**
     * @type number
     */
    Id;

    /**
     * @type string
     */
    Title;

    /**
     * @type string
     */
    Description;

    /**
     * FK to User.
     * @type number
     */
    OwnerId;

    /**
     * @type string
     */
    AddressLine;

    /**
     * @type string
     */
    ZipCode;

    /**
     * FK to City.
     * @type number
     */
    CityId;

    /**
     * @type number
     */
    Cost;

    /**
     * @type number
     */
    PaymentDay;

    /**
     * @type number
     */
    RoommatesLimit;

    /**
     * @type number
     */
    RoommatesCount;

    /**
     * @type string
     */
    CalendarURL;

    /**
     * @type string
     */
    PlaylistURL;

    /**
     * Constructor Method.
     */
    constructor() {
        super();
    }
}

module.exports = House;
