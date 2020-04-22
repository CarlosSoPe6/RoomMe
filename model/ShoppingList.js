'use strict';

const DBClient = require('./DBClient');
const mssql = require('mssql');

/**
 * ShoppingList model class.
 */
class ShoppingList extends DBClient {

    /**
     * @type number
     */
    Id;

    /**
     * @type string
     */
    Title;

    /**
     * @type number
     */
    Budget;

    /**
     * @type number
     */
    Cost;

    /**
     * FK to House
     * @type number
     */
    HouseId;

    

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
    async addList(newList) {
        let conn = await super.adquireConnection();
        let result = await conn
            .input('id',mssql.Int, newList.id)
            .input('title',mssql.NVarChar,newList.title)
            .input('budget', mssql.Money,newList.budget)
            .input('cost',mssql.Money, newList.cost)
            .input('house',mssql.Int,newList.house)
            .query(`insert into [RoomMe].[ShoppingList]
                    values (@id, @title, @budget, @cost, @house)`);
        return result;
    }

     /**
     * Update House
     * @param {Object} newHouse
     */
    async updateList(newList) {
        let conn = await super.adquireConnection();
        let result = await conn
            .input('id',mssql.Int, newList.id)
            .input('title',mssql.NVarChar,newList.title)
            .input('budget', mssql.Money,newList.budget)
            .input('cost',mssql.Money, newList.cost)
            .input('house',mssql.Int,newList.house)
            .query(`update [RoomMe].[ShoppingList]
                    set Title=@title,
                        Budget=@budget,
                        Cost=@cost
                    where [RoomMe].[ShoppingList].[Id]=@id`);
        return result;
    }

    async getAllLists(House) {
        let conn = await super.adquireConnection();
        let recordset = await conn
            .input('houseid', mssql.Int, House)
            .query(
                `select * from [RoomMe].[ShoppingList] 
                where [RoomMe].[ShoppingList].[HouseId] = @houseid`
            ).recordset;
        return recordset;
    }

    async deleteList(Id) {
        let conn = await super.adquireConnection();
        let result = await conn
            .input('listid',mssql.Int, Id)
            .query(`delete from [RoomMe].[ShoppingList]
                    where [RoomMe].[ShoppingList].[Id] = @listid`);
        return result;
    }
}

module.exports = ShoppingList;
