'use strict';

const dbconfig = require('./../../config/mongo.conf');

class DBClient {

    constructor() {
        /**
         * Mongoose Schema
         * @type Schema<any>
         */
        this._schema

        /**
         * Mongoose Model
         * @type Model<T>
         */
        this._model

        /**
         * Mongoose proyection
         * @type Object
         */
        this._listProjection
    }

    /**
     * 
     * @param {*} query 
     * @param {*} projection 
     * @param {*} options 
     */
    async query(query, projection = {}, options = {}) {
        return await this._model.find(query, projection);
    }

    /**
     * 
     */
    async queryOne(query, projection = {}, options = {}) {
        return await this._model.findOne(query, projection, options);
    }

    /**
     * 
     * @param {*} query 
     * @param {*} dataObject 
     */
    async update(query, dataObject) {
        return await this._model.findOneAndUpdate(query, { $set: dataObject }, {
            new: true
        });
    }

    /**
     * 
     * @param {*} query 
     */
    async exists(query) {
        let doc = await this._model.findOne(query);
        return doc != undefined;
    }

    /**
     * 
     * @param {*} document 
     */
    async add(document) {
        return await document.save();
    }
}

module.exports = DBClient;