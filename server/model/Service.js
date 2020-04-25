'use strict';

const DBClient = require('./DBClient');
const mssql = require('mssql');

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

    /**
     * Get all available services.
     */
    async getAllServices() {
        let conn = await super.adquireConnection();
        let recordset = await conn
            .query(`select * from [RoomMe].[Service]`).recordset;
        return recordset;
    }

    async getServiceById(Id) {
        let conn = await super.adquireConnection();
        let recordset = await conn
            .input('serviceid', mssql.Int, Id)
            .query(
                `select * from [RoomMe].[Service] 
                where [RoomMe].[Service].[Id] = @serviceid`
            ).recordset;
        return recordset;
    }
}

module.exports = Service;
