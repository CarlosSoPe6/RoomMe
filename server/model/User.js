'use strict';

const DBClient = require('./DBClient');
const mongoose = require('./../../config/mongo.conf');
/**
 * User model class.
 */
class User extends DBClient {
    /**
     * Class constructor.
     */
    constructor() {
        super();
        this._schema = new mongoose.Schema({
            uid: {
                type: Number,
                unique: true
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
                type: String,
                unique: true,
                required: true
            },
            photo: {
                type: String,
                required: true
            },
            passwordHash: {
                type: String
            },
            GId: {
                type: String
            },
            phone: {
                type: String
            },
            verified: {
                type: Boolean,
                required: false
            }
        });
        this._model = mongoose.model('User', this._schema);
        this._listProjection = {
            'uid': 1,
            'name': 1,
            'lastName': 1,
            'email': 1,
            'photo': 1,
            'phone': 1,
            '_id': 0,
            'passwordHash': 0,
            'GId': 0
        };
        /**
          * uid database field.
          * @type number
          */
        this.uid = 0;

        /**
         * name database field.
         * @type string
         */
        this.name = "";

        /**
         * lastName database field.
         * @type string
         */
        this.lastName = "";

        /**
         * email database field.
         * @type string
         */
        this.email = "";

        /**
         * photo database field.
         * @type string
         */
        this.photo = "";

        /**
         * passwordHash database field.
         * @type string
         */
        this.passwordHash = "";

        /**
         * GId database field.
         * @type string
         */
        this.GId = "";

        /**
         * phone database field.
         * @type string
         */
        this.phone = "";

        /**
         * verified database field.
         * @type boolean
         */
        this.verified = false;
    }

    /**
     * Gets all users
     * @param {Object} query 
     * @param {Object} options 
     * @returns {User[]} Array of results.
     */
    async getAllUsers(query = {}, options = { 'limit': 10, 'skip': 0 }) {
        return await super.query(query, this._listProjection, options);
    }

    async getSingleUser(query) {
        return await super.queryOne(query, this._listProjection, {});
    }

    async createSelfUser(id, name, lastName, email, photo, passwordHash, phone) {
        let record = new this._model({ id, name, lastName, email, photo, passwordHash, phone });
        return await super.add(record);
    }

    async updateUser(id, dataObject) {
        let query = { 'id': id };
        return await super.update(query, dataObject);
    }
}

module.exports = new User();
