'use strict';

const UserModel = require('./../model/User');
const ContactModel = require('./../model/Contact');
const cloudinary = require('cloudinary');

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
        if(doc == undefined) {
            res.status(404).send('NOT FOUND');
            return;
        }
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
        let id = req.user.uid;
        let doc = await UserModel.getSingleUser({'uid': id});
        // Convert result to JSON
        doc = JSON.parse(JSON.stringify(doc));
        console.log(doc);
        res.json(doc);
    }

    /**
     * Updates the session user.
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    async updateUser(req, res) {
        let id = req.user.uid;

        if(req.body.name == undefined) {
            res.status(400).json({'error': 'No name'});
            return;
        }
        if(req.body.lastName == undefined) {
            res.status(400).json({'error': 'No last name'});
            return;
        }
        if(req.body.email == undefined && req.body.phone == undefined) {
            res.status(400).json({'error': 'No email or phone'});
            return;
        }
        
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

    async updateUserHouse(req, res) {
        let id = req.user.uid;
        let house = req.body.house;
        let doc = await UserModel.updateUser(id,
        {
            house
        });
        // Convert result to JSON
        doc = JSON.parse(JSON.stringify(doc));
        console.log(doc);
        res.json(doc);
    }

    /**
     * Updates a user photo.
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    async updatePhoto(req, res) {
        let userId = req.user.uid;
        const result = await cloudinary.v2.uploader.upload(req.file.path);
        let obj = {
            photo: result.url
        };
        let doc = UserModel.updateUser(userId, obj);
        // Convert result to JSON
        doc = JSON.parse(JSON.stringify(doc));
        console.log(doc);
        res.json(doc);
    }
}

module.exports = new UserController();
