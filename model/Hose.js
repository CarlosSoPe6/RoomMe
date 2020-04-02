'use strict';

const DBClient = require('./DBClient');

class House extends DBClient {
    constructor() {
        super();
    }
}

module.exports = House;
