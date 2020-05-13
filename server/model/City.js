'use strict';

const DBClient = require('./DBClient');
const mongoose = require('../../config/mongo.conf');
/**
 * City model class.
 */
class City extends DBClient {

    /**
     * Constructor method.
     */
    constructor() {
        super();
        this._schema = new mongoose.Schema({
            cid: {
                type: Number,
                unique: true
            },
            name: {
                type: String,
                required: true
            }
        })
        this._model = mongoose.model('cities', this._schema);
    }


    async getAllCities() {
        return await this.query({},"",{});
    }
    
}

module.exports = new City();
