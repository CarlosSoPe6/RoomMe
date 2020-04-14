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

    /**
     * Add a new HouseService
     * @param {number} Id of the house.
     * @param {number} Id of the service
     * @returns {any} result.
     */
    async addHouseService(house, service) {
        let conn = await super.adquireConnection();
        let result = await conn
            .input('houseid',mssql.Int, house)
            .input('serviceid',mssql.Int, service)
            .query(`insert into [RoomMe].[HouseService]
                    values (@houseid, @serviceid)`);
        return result;
    }

    async getServiceByHouse(house) {
        let conn = await super.adquireConnection();
        let  recordset = await conn
            .input('houseid',mssql.Int, house)
            .query(`select ServiceId from [RoomMe].[HouseService]
                    where [RoomMe].[HouseService].[HouseId] = @houseid`
            ).recordset;
        return recordset;
    }

    async deleteHouseService(house, service) {
        let conn = await super.adquireConnection();
        let result = await conn
            .input('houseid',mssql.Int, house)
            .input('serviceid',mssql.Int, service)
            .query(`delete from [RoomMe].[HouseService]
                    where [RoomMe].[HouseService].[HouseId] = @houseid AND [RoomMe].[HouseService].[ServiceId] = @serviceid`);
        return result;
    }
}

module.exports = HouseService;
