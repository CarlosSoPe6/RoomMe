'use strict';

const DBClient = require('./DBClient');

class User extends DBClient {
    constructor(){
        super();
    }

    async getAllUsers() {
        let conn = await this.getConnection();
        let result = await conn.query('select * from [RoomMe].[User];');
        await this.closeConnection();
        return result;
    }
}

let test = new User();
(async () => console.log("USERS:", await test.getAllUsers()))();
