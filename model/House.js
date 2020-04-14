'use strict';

const DBClient = require('./DBClient');
const mssql = require('mssql');

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

    /**
     * Create/Register House
     * @param {Object} newHouse
     */
    async addHouse(newHouse) {
        let conn = await super.adquireConnection();
        let result = await conn
            .input('id',mssql.Int, newHouse.id)
            .input('title',mssql.NVarChar,newHouse.title)
            .input('description', mssql.NVarChar,newHouse.description)
            .input('owner',mssql.Int, newHouse.owner)
            .input('address',mssql.NVarChar,newHouse.address)
            .input('zip',mssql.NChar,newHouse.zipcode)
            .input('city', mssql.Int, newHouse.city)
            .input('cost',mssql.Money,newHouse.cost)
            .input('pday',mssql.Int,newHouse.paymentday)
            .input('roomlimit',mssql.Int, newHouse.roomlimit)
            .input('roomcount',mssql.Int, newHouse.roomcount)
            .input('calendar',mssql.NVarChar, newHouse.calendar)
            .input('playlist',mssql.NVarChar, newHouse.playlist)
            .query(`insert into [RoomMe].[House]
                    values (@id, @title, @description, @owner, @address, @zip, @city, @cost, @pday, @roomlimit, @roomcount, @calendar, @playlist)`);
        return result;
    }

     /**
     * Update House
     * @param {Object} newHouse
     */
    async updateHouse(newHouse) {
        let conn = await super.adquireConnection();
        let result = await conn
            .input('id',mssql.Int, newHouse.id)
            .input('title',mssql.NVarChar,newHouse.title)
            .input('description', mssql.NVarChar,newHouse.description)
            .input('owner',mssql.Int, newHouse.owner)
            .input('address',mssql.NVarChar,newHouse.address)
            .input('zip',mssql.NChar,newHouse.zipcode)
            .input('city', mssql.Int, newHouse.city)
            .input('cost',mssql.Money,newHouse.cost)
            .input('pday',mssql.Int,newHouse.paymentday)
            .input('roomlimit',mssql.Int, newHouse.roomlimit)
            .input('roomcount',mssql.Int, newHouse.roomcount)
            .input('calendar',mssql.NVarChar, newHouse.calendar)
            .input('playlist',mssql.NVarChar, newHouse.playlist)
            .query(`update [RoomMe].[House]
                    set Title=@title,
                        Description=@description,
                        OwnerId=@owner,
                        AddressLine=@address,
                        ZipCode=@zip,
                        CityId=@city,
                        Cost=@cost,
                        PaymentDay=@pday,
                        RoommatesLimit=@roomlimit,
                        RoommatesCount=@roomcount,
                        CalendarURL=@calendar,
                        PlaylistURL=@playlist
                    where [RoomMe].[House].[Id]=@id`);
        return result;
    }

    async getHouseById(Id) {
        let conn = await super.adquireConnection();
        let recordset = await conn
            .input('houseid', mssql.Int, Id)
            .query(
                `select * from [RoomMe].[House] 
                where [RoomMe].[House].[Id] = @houseid`
            ).recordset;
        return recordset;
    }
}

module.exports = House;
