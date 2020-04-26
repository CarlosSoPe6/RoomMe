'use strict';

const DBClient = require('./DBClient');
const mongoose = require('../../config/mongo.conf');
const AutoIncrement = require('mongoose-sequence')(mongoose);

/**
 * ShoppingList model class.
 */
class ShoppingItem extends DBClient {

    /**
     * Constructor Method.
     */
    constructor() {
        super();
        this._schema = new mongoose.Schema({
            siid: {
                type: Number,
                unique: true
            },
            product: {
                type: String,
                required: true
            },
            creator: {
                type: Number,
                required: true
            },
            qty: {
                type: String,
                required: true
            },
            completed: {
                type: Boolean,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            buyer: {
                type: Number
            },
            list: {
                type: Number,
                required: true
            }
        });
        this._schema.plugin(AutoIncrement,{inc_field:'siid'});
        this._model = mongoose.model('ShoppingItem',this._schema);
    }

    /**
     * Create/Register House
     * @param {Object} newHouse
     */
    async addItem(newItem) {
        let doc = new this._model(newItem);
        return await this.add(doc);
    }

     /**
     * Update House
     * @param {Object} newHouse
     */
    async updateItem(newItem) {
        return await this.update({siid:newItem.siid},newItem);
    }

    async getAllItemsByList(List) {
        return await this.query({list:List},"",{});
    }

    async getAllItemsByBuyer(Buyer) {
        return await this.query({buyer:Buyer},"",{});
    }

    async deleteItem(Id) {
        return await this.delete({siid:Id});
    }
}

let shopitem = new ShoppingItem();
module.exports = shopitem;
