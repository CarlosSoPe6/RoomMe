'use strict';

const UserModel = require('./../model/User');
const ContactModel = require('./../model/Contact');

class UserController {
    constructor() {

    }
    
    /**
     * Gets all users.
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    async getAllUsers(req, res) {
        let options = {};
        let query = {};

        if(req.query.limit != undefined){
            options['limit'] = req.query.limit;
        }
        if(req.query.page != undefined){
            options['skip'] = (req.query.limit != undefined ? req.query.limit * 1 : 1) * req.query.page;
        }
        let docs = await UserModel.getAllUsers(query, options);
        // Convert result to JSON
        docs = JSON.parse(JSON.stringify(docs));
        console.log(docs);
        res.json(docs);
    }

    /**
     * Gets an user by Id.
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    async getUser(req, res) {
        let id = req.params.id;
        let doc = await UserModel.getSingleUser({'uid': id});
        // Convert result to JSON
        doc = JSON.parse(JSON.stringify(doc));
        console.log(doc);
        res.json(doc);
    }

    /**
     * Gets the session user.
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    async getMe(req, res) {
        doc = JSON.parse(req.user);
        res.json(doc);
    }

    /**
     * Updates the session user.
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    async updateUser(req, res) {
        let id = req.user.uid;
        let {name, lastName, email, phone}
            = req.body;
        let doc = await UserModel.updateUser(id,
        {
            name, 
            lastName, 
            email,
            phone
        });
        // Convert result to JSON
        doc = JSON.parse(JSON.stringify(doc));
        console.log(doc);
        res.json(doc);
    }

    /**
     * Gets the contacts of an user.
     * @param {Expres.Request} req 
     * @param {Express.Response} res 
     */
    async getContacts(req, res) {
        let id = req.params.id;
        let doc = await ContactModel.getAllContacts(id);
        // Convert result to JSON
        doc = JSON.parse(JSON.stringify(doc));
        console.log(doc);
        res.json(doc);
    }
}

module.exports = new UserController();
