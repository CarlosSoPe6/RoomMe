'use strict';

const DBClient = require('./DBClient');
const mssql = require('mssql');

/**
 * ShoppingList model class.
 */
class ShoppingItem extends DBClient {

    /**
     * @type number
     */
    Id;

    /**
     * @type string
     */
    Product;

    /**
     * FK to User
     * @type number
     */
    Creator;

    /**
     * @type string
     */
    Qty;

    /**
     * @type boolean
     */
    Completed;

    /**
     * @type number
     */
    Price;

    /**
     * @type number
     */
    Buyer;

    /**
     * @type number
     */
    List;

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
    async addItem(newItem) {
        let conn = await super.adquireConnection();
        let result = await conn
            .input('id',mssql.Int, newItem.id)
            .input('product',mssql.NVarChar,newItem.product)
            .input('creator', mssql.Int,newItem.creator)
            .input('qty',mssql.NVarChar, newItem.qty)
            .input('completed',mssql.Binary,newItem.completed)
            .input('price',mssql.Money,newItem.price)
            .input('buyer',mssql.Int,newItem.buyer)
            .input('list',mssql.Int,newItem.list)
            .query(`insert into [RoomMe].[ShoppingItem]
                    values (@id, @product, @creator, @qty, @completed, @price, @buyer, @list)`);
        return result;
    }

     /**
     * Update House
     * @param {Object} newHouse
     */
    async updateItem(newItem) {
        let conn = await super.adquireConnection();
        let result = await conn
            .input('id',mssql.Int, newItem.id)
            .input('product',mssql.NVarChar,newItem.product)
            .input('creator', mssql.Int,newItem.creator)
            .input('qty',mssql.NVarChar, newItem.qty)
            .input('completed',mssql.Binary,newItem.completed)
            .input('price',mssql.Money,newItem.price)
            .input('buyer',mssql.Int,newItem.buyer)
            .input('list',mssql.Int,newItem.list)
            .query(`update [RoomMe].[ShoppingItem]
                    set Product=@product,
                        Qty=@qty,
                        Completed=@completed,
                        Price=@price,
                        Buyer=@buyer
                    where [RoomMe].[ShoppingItem].[Id]=@id`);
        return result;
    }

    async getAllItemsByList(List) {
        let conn = await super.adquireConnection();
        let recordset = await conn
            .input('listid', mssql.Int, List)
            .query(
                `select * from [RoomMe].[ShoppingItem] 
                where [RoomMe].[ShoppingItem].[ListId] = @listid`
            ).recordset;
        return recordset;
    }

    async getAllItemsByBuyer(Buyer) {
        let conn = await super.adquireConnection();
        let recordset = await conn
            .input('buyerid', mssql.Int, Buyer)
            .query(
                `select * from [RoomMe].[ShoppingItem] 
                where [RoomMe].[ShoppingItem].[Buyer] = @buyerid`
            ).recordset;
        return recordset;
    }

    async deleteItem(Id) {
        let conn = await super.adquireConnection();
        let result = await conn
            .input('itemid',mssql.Int, Id)
            .query(`delete from [RoomMe].[ShoppingItem]
                    where [RoomMe].[ShoppingItem].[Id] = @itemid`);
        return result;
    }
}

module.exports = ShoppingItem;
