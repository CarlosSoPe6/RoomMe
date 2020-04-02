'use strict';

const DBClient = require('./DBClient');

class Contact extends DBClient {
    constructor() {
        super();
    }
}

module.exports = Contact;
