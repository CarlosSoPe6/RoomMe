'use strict';

const DBClient = require('./DBClient');
const mssql = require('mssql');
/**
 * User model class.
 */
class User extends DBClient {

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
     * LastName database field.
     * @type string
     */
    LastName;

    /**
     * Email database field.
     * @type string
     */
    Email;

    /**
     * Photo database field.
     * @type string
     */
    Photo;

    /**
     * PasswordHash database field.
     * @type string
     */
    PasswordHash;

    /**
     * GId database field.
     * @type string
     */
    GId;

    /**
     * Phone database field.
     * @type string
     */
    Phone;

    /**
     * Verified database field.
     * @type boolean
     */
    Verified;

    /**
     * Class constructor.
     */
    constructor() {
        super();
    }

    /**
     * Test method.
     * @returns {User[]} Array of results.
     */
    async getAllUsers() {
        let conn = await super.adquireConnection();
        let result = await conn.query('select * from [RoomMe].[User];').recordset;
        await super.closeConnection();
        return result;
    }

    async createUser() {
        let conn = await super.adquireConnection();
        let result = await conn.input('name', mssql.NVarChar, 'value')
            .query('');
        return result;
    }
}

module.exports = User;
