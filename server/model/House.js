'use strict';

const DBClient = require('./DBClient');
const mongoose = require('../../config/mongo.conf');
const AutoIncrement = require('mongoose-sequence')(mongoose);

/**
 * House model class.
 */
class House extends DBClient {

    /**
     * Constructor Method.
     */
    constructor() {
        super();
        this._schema = new mongoose.Schema({
            hid: {
                type: Number,
                unique: true
            },
            title: {
                type: String,
                required: true 
            },
            type: {
                type: String,
                required: true
            },
            description: {
                type: String
            },
            ownerId: {
                type: Number,
                required: true
            },
            members: {
                type: Array,
                requiresd: true
            },
            addressLine: {
                type: String
            },
            zipCode: {
                type: String
            },
            city: {
                type: String
            },
            state: {
                type: String
            },
            country: {
                type: String
            },
            cost: {
                type: Number
            },
            paymentday: {
                type: Number
            },
            roommatesLimit: {
                type: Number,
                required: true
            },
            roommatesCount: {
                type: Number, 
                required: true
            },
            calendarURL: {
                type: String
            },
            playlistURL: {
                type: String
            },
            foto: {
                type: String
            },
            services: {
                type: Array,
                required: true
            }
        });
        this._schema.plugin(AutoIncrement,{inc_field:'hid'});
        this._model = mongoose.model('Houses', this._schema);
    }

    /**
     * Create/Register House
     * @param {Object} newHouse
     */
    async addHouse(newHouse) {
        let doc = new this._model(newHouse);
        return await this.add(doc);
    }

     /**
     * Update House
     * @param {Object} newHouse
     */
    async updateHouse(newHouse) {
        return await this.update({hid:newHouse.hid},newHouse);
    }

    async getHouseById(Id) {
        return await this.queryOne({hid:Id},"",{});
    }

    async getHousesById(Ids) {
        let ids = [];
        // console.log('ids:', Ids);
        for(let id of Ids)
            ids.push({"hid": id});
        let query = {
            "$or": ids
        };
        return await this.query(query,"",{});
    }

    async getHouseByOwner(Id) {
        return await this.queryOne({ownerId:Id},"",{});
    }


}

let house = new House();
module.exports = house;
