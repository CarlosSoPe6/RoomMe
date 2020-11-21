'use strict'

const house = require('../model/House');
const user = require('../model/User');
const task = require('../model/Task');
const download = require('download');
const path = require('path');
const cloudinary = require('cloudinary');

class HouseControl {
    async add(req, res) {
        console.log(req.body);

        let newHouse = {
            title: req.body.title,
            type: req.body.type,
            description: req.body.description,
            ownerId: req.user.uid,//req.user.id 
            addressLine: req.body.addressLine,
            zipCode: req.body.zipCode,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            cost: req.body.cost,
            roommatesLimit: req.body.roommatesLimit,
            roommatesCount: 0,
            //calendarURL: req.body.calendar,
            members: [
                req.user.uid
            ],
            playlistURL: req.body.playlist,
            foto: req.body.foto,
            services: req.body.services
        }
        try{
            const created = await house.addHouse(newHouse);
            const owner = await user.getSingleUser({'uid': req.user.uid});
            owner.houses.push(created.hid);
            user.updateUser(req.user.uid, {
                houses: owner.houses,
            });
            console.log('POST /house', {hid: created.hid});
            res.json({hid: created.hid});
        }
        catch(err){
            console.log(err)
            res.status(400).send({
                error:"Error al añadir casa"
            });
        }
       
    }

    async getHouseById(req, res) {
        const { id } = req.params;
        const h = await house.getHouseById(id);
        res.json(h);
    }

    async getHouse(req, res) {
        let h = await house.getHouseById(req.user.house);
        res.json(h);
    }

    async getHouses(req, res) {
        if(req.user.houses.length == 0)
            res.json([]);
        else {
            let docs = await house.getHousesById(req.user.houses);
            let houses = [];
            for(let doc of docs) {
                houses.push({
                    'hid': doc.hid,
                    'members': await user.getUsersById(doc.members),
                    'tasks': await task.getAllHouseTasks(doc.hid),
                    "services": doc.services,
                    "title": doc.title,
                    "type": doc.type,
                    "description": doc.description,
                    "ownerId": doc.ownerId,
                    "addressLine": doc.addressLine,
                    "zipCode": doc.zipCode,
                    "city": doc.city,
                    "state": doc.state,
                    "country": doc.country,
                    "cost": doc.cost,
                    "roommatesLimit": doc.roommatesLimit,
                    "roommatesCount": doc.roommatesCount,
                    "playlistURL": doc.playlistURL,
                    "foto": doc.foto,
                });
            }
            res.json(houses);
        }
    }

    async editHouse(req, res) {
        // Validate User


        let newHouse = {
            hid: req.body.hid,
            title: req.body.title,
            type: req.body.type,
            description: req.body.description,
            ownerId: req.user.uid,//req.user.id 
            addressLine: req.body.addressLine,
            zipCode: req.body.zipCode,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            cost: req.body.cost,
            roommatesLimit: req.body.roommatesLimit,
            roommatesCount: 0,
            //calendarURL: req.body.calendar,
            playlistURL: req.body.playlist,
            foto: req.body.foto,
            services: req.body.services
        }
        try{
            await house.updateHouse(newHouse);
            res.sendStatus(200);
        }
        catch(err){
            console.log(err)
            res.status(400).send({
                error:"Error al editar casa"
            });
        }
    }

    async addPhoto(req, res) {
        const { id } = req.query;
        const result = await cloudinary.v2.uploader.upload(req.file.path);
        let h = await house.getHouseById(id);
        console.log(h);
        h.foto = result.url;
        house.updateHouse(h);
        res.sendStatus(200);
    }

    async getHousePhoto(req, res) {
        let h = await house.getHouseById(req.user.house);
        await download(h.foto,path.join(__dirname, '../temp/' ));
        res.sendFile(path.join(__dirname, '../temp/' + path.basename(h.foto)));
    }
}

const HouseController = new HouseControl();
module.exports = HouseController;
