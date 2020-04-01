'use strict';

const mssql = require('mssql');
const config = {
    user: process.env.MSSQL_SERVER_USER || 'RoomMe',
    password: process.env.MSSQL_SERVER_PASSWORD || '$3cureP@ssW0rd',
    server: process.env.MSSQL_SERVER_INSTANCE || 'localhost', 
    database: process.env.MSSQL_SERVER_DATABASE || 'RoomMe',
};

let connectionPool = null;

console.log(config);

async function getConnection() {
    if(connectionPool){
        return  connectionPool;
    }
    connectionPool = await mssql.connect(config);
    return connectionPool;
}

module.exports = getConnection;