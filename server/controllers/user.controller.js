'use strict';

const UserModel = require('./../model/User');

class UserController {
    constructor() {
        this.userModel = new UserModel();
    }
    
    getUser(req, res) {

    }

    updateUser(req, res) {

    }

    getAllContacts(req, res) {

    }

    addContact(req, res) {

    }

    deleteContact(req, res) {

    }

    updateContact(req, res) {

    }
}

module.exports = new UserController();
