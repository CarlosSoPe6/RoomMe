'use strict'

const house = require('../model/House');
const user = require('../model/User');
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
            playlistURL: req.body.playlist,
            foto: req.body.foto,
            services: req.body.services
        }
        try{
            await house.addHouse(newHouse);
            let house_owner = await house.getHouseByOwner(newHouse.ownerId);
            await user.updateUser(newHouse.ownerId,
                {
                    house: house_owner.hid
                });
            res.sendStatus(200);
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
        console.log("user:", req.user, "\n");
        let houses = await house.getHousesById(req.user.houses);
        res.json(houses);
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
        const result = await cloudinary.v2.uploader.upload(req.file.path);
        let h = await house.getHouseById(req.user.house);
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