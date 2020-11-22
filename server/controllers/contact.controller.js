'use strict';

const ContactModel = require('./../model/Contact');

class ContactController {
    constructor() {
        
    }
    
    /**
     * Gets all the contacts of an user.
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    async getAllContacts(req, res) {
        let id = req.user.uid;
        let doc = await ContactModel.getAllContacts(id);
        // Convert result to JSON
        doc = JSON.parse(JSON.stringify(doc));
        console.log(doc);
        res.json(doc);
    }

    /**
     * Creates a contact binded to the session user.
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    async addContact(req, res) {
        let userId = req.user.uid;
        if(req.body.name == undefined) {
            res.status(401).json({'error': 'No name'});
            return;
        }
        if(req.body.lastName == undefined) {
            res.status(401).json({'error': 'No last name'});
            return;
        }
        if(req.body.email == undefined && req.body.phone == undefined) {
            res.status(401).json({'error': 'No email or phone'});
            return;
        }
        let name = req.body.name;
        let lastName = req.body.lastName;
        let email = req.body.email || '';
        let phone = req.body.phone || '';

        let doc = await ContactModel.createContact(userId, name, lastName, email, phone);
        // Convert result to JSON
        doc = JSON.parse(JSON.stringify(doc));
        console.log(doc);
        res.json(doc);
    }

    /**
     * Deletes a contact by uid.
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    async deleteContact(req, res) {
        let userId = req.user.uid;
        let contactId = req.params.id;
        let doc = await ContactModel.deleteContact(contactId, userId);
        // Convert result to JSON
        doc = JSON.parse(JSON.stringify(doc));
        console.log(doc);
        res.json(doc);
    }

    /**
     * Updates a contact by uid
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     */
    async updateContact(req, res) {
        let id = Number(req.params.id);

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

        try {
            let {name, lastName, email, phone}
                = req.body;
            console.log(req.body);
            console.log(id);
            let doc = await ContactModel.updateContact(id,
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
        } catch (e) {
            console.error(e);
            res.sendStatus(500);
        }
    }
}

module.exports = new ContactController();