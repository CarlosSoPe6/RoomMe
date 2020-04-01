'use strict';

const dbconfig = require('../config/dbconfig');

class DBClient {
    constructor() {
        this.__pool = null;
    }

    async closeConnection() {
        try {
            await this.__pool.close();
        } catch (err) {
            console.error('Close connection error');
            console.error(err);
        }
        this.__pool = null;
    }

    async getConnection() {
        try {
            if (this.__pool) {
                return this.__pool;
            }
            this.__pool = await dbconfig();
            this.__pool.on('error', async (err) => {
                console.error('Connection error');
                console.error(err);
            });
            return this.__pool;
        } catch (err) {
            console.error('Open connection error');
            console.error(err);
            return null;
        }
    }
}

module.exports = DBClient;