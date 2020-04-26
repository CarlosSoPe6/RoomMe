'use strict';

const DBClient = require('./DBClient');
const mongoose = require('../../config/mongo.conf');

/**
 * Service model class.
 */
class Service extends DBClient {
    
    constructor() {
        super();
        this._schema = new mongoose.Schema({
            sid: {
                type: Number,
                unique: true
            },
            name: {
                type: String,
                required: true
            }
        })
        this._model = mongoose.model('services', this._schema);
    }

    async getService(id) {
        return await this.queryOne({sid:id},"",{});
    }

    async getAllServices() {
        return await this.query({},"",{});
    }
}

let service = new Service();
module.exports = service;
