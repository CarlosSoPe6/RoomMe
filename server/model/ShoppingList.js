'use strict';

const DBClient = require('./DBClient');
const mongoose = require('../../config/mongo.conf');
const AutoIncrement = require('mongoose-sequence')(mongoose);

/**
 * ShoppingList model class.
 */
class ShoppingList extends DBClient {


    /**
     * Constructor Method.
     */
    constructor() {
        super();
        this._schema = new mongoose.Schema({
            slid: {
                type: Number,
                unique: true
            },
            title: {
                type: String,
                required: true
            },
            budget: {
                type: Number,
                required: true
            },
            cost: {
                type: Number,
                required: true
            },
            houseId: {
                type: Number,
                required: true
            }
        });
        this._schema.plugin(AutoIncrement, {inc_field:'slid'});
        this._model = mongoose.model('ShoppingList', this._schema);
    }

    /**
     * Create/Register House
     * @param {Object} newHouse
     */
    async addList(newList) {
        let doc = new this._model(newList);
        return await this.add(doc);
    }

     /**
     * Update House
     * @param {Object} newHouse
     */
    async updateList(newList) {
        return await this.update({slid:newList.slid},newList);
    }

    async getAllLists(House) {
        return await this.query({houseId:House},"",{});
    }

    
    async getList(Id) {
        return await this.queryOne({slid:Id},"",{});
    }

    async deleteList(Id) {
        return await this.delete({slid:Id});
    }
}

let shoplist = new ShoppingList();
module.exports = shoplist;
