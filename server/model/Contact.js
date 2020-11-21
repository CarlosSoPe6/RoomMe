'use strict';

const DBClient = require('./DBClient');
const mongoose = require('./../../config/mongo.conf');

/**
 * Contact model class.
 */
class Contact extends DBClient {
    /**
     * Constructor mthod.
     */
    constructor() {
        super();
        this._schema = new mongoose.Schema({
            uid: {
                type: Number,
                unique: true
            },
            userId: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            },
            email: {
                type: String
            },
            phone: {
                type: String,
                required: true
            }
        });
        this._model = mongoose.model('contacts', this._schema);
        /**
         * @type number
         */
        this.uid;

        /**
         * FK to user.
         * @type number
         */
        this.serId;

        /**
         * @type string
         */
        this.name;

        /**
         * @type string
         */
        this.lastName;

        /**
         * @type string
         */
        this.email;

        /**
         * @type string
         */
        this.phone;
    }

    async getAllContacts(userId) {
        let query = {
            'userId': userId
        };
        return await super.query(query);
    }

    async getSingleContact(contactId) {
        let query = { 'uid': contactId };
        return await super.query(query);
    }

    async createContact(userId, name, lastName, email, phone) {
        let uid = new Date().getUTCMilliseconds();
        let record = new this._model({
            uid,
            userId,
            name,
            lastName,
            email,
            phone
        });
        return await super.add(record);
    }

    async updateContact(contactId, dataObject) {
        let contact = await this.getSingleContact(contactId);
        let query = { 'uid': contactId };
        // Iterate over the dataObject properties to update queried user.
        for (const prop in dataObject) {
            contact[prop] = dataObject[prop];
        }
        return await super.update(query, user);
    }

    async deleteContact(contactId, userId) {
        let query = { 'uid': contactId, 'userId': userId};
        return await super.delete(query);
    }
}

module.exports = new Contact();
