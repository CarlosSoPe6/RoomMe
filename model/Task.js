'use strict';

const DBClient = require('./DBClient');

class Task extends DBClient {
    constructor(){
        super();
    }
}

module.exports = Task;
