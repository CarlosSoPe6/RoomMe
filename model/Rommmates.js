'use strict';

const DBClient = require('./DBClient');

class Roommates extends DBClient() {
    constructor() {
        super();
    }
}

module.exports = Roommates;
