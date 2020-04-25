'use strict';

const mssql = require('mssql');
const ConnectionPool = mssql.ConnectionPool;
const config = {
    user: process.env.MSSQL_SERVER_USER || 'RoomMe',
    password: process.env.MSSQL_SERVER_PASSWORD || '$3cureP@ssW0rd',
    server: process.env.MSSQL_SERVER_INSTANCE || 'localhost', 
    database: process.env.MSSQL_SERVER_DATABASE || 'RoomMe',
};

/**
 * Gets a MSSQL connection.
 * @returns {Promise<ConnectionPool>} Connection Pool.
 */
async function getConnection() {
    return await mssql.connect(config);
}

module.exports = getConnection;