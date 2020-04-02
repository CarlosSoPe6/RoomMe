'use strict';

const DBClient = require('./DBClient');

class User extends DBClient {

    /**
     * @type {number}
     */
    Id;

    /**
     * @type {string}
     */
    Name;

    /**
     * @type {string}
     */
    LastName;

    /**
     * @type {string}
     */
    Email;

    /**
     * @type {string}
     */
    Photo;

    /**
     * @type {string}
     */
    PasswordHash;

    /**
     * @type {string}
     */
    GId;

    /**
     * @type {string}
     */
    Phone;

    /**
     * @type {boolean}
     */
    Verified;

    /**
     * Class constructor
     */
    constructor() {
        super();
    }

    /**
     * @returns {User[]} Array of results
     */
    async getAllUsers() {
        let conn = await this.adquireConnection();
        let result = await conn.query('select * from [RoomMe].[User];').recordset;
        await this.closeConnection();
        return result;
    }
}

module.exports = User;
