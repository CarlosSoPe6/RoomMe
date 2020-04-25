'use strict';

const UserModel = require('./../model/User');

class UserController {
    constructor() {
        this.userModel = new UserModel();
    }
    
    async getAllUsers(req, res) {
        let options = {};
        let query = {};

        if(req.query.limit != undefined){
            options['limit'] = req.query.limit;
        }
        if(req.query.page != undefined){
            options['skip'] = (req.query.limit != undefined ? req.query.limit * 1 : 1) * req.query.page;
        }
        let docs = await this.userModel.getAllUsers(query, options);
        // Convert result to JSON
        docs = JSON.parse(JSON.stringify(docs));
        console.log(docs);
        res.json(docs);
    }

    async getUser(req, res) {
        let id = req.params.id;
        let doc = await this.userModel.getSingleUser(id);
        // Convert result to JSON
        doc = JSON.parse(JSON.stringify(doc));
        console.log(doc);
        res.json(doc);
    }

    async updateUser(req, res) {
        let id = req.params.id;
        let {name, lastName, email, photo, phone}
            = req.body;
        let doc = await this.userModel.updateUser(id,
        {
            name, 
            lastName, 
            email,
            photo,
            phone
        });
        // Convert result to JSON
        doc = JSON.parse(JSON.stringify(doc));
        console.log(doc);
        res.json(doc);
    }

    async getAllContacts(req, res) {

    }

    async addContact(req, res) {

    }

    async deleteContact(req, res) {

    }

    async updateContact(req, res) {

    }
}

module.exports = new UserController();
