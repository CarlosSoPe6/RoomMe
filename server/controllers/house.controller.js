'use strict'

const house = require('../model/House');
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
            addressLine: req.body.address,
            zipCode: req.body.zipcode,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            cost: req.body.cost,
            roommatesLimit: req.body.roomlimit,
            roommatesCount: 0,
            //calendarURL: req.body.calendar,
            playlistURL: req.body.playlist,
            foto: req.body.foto,
            services: req.body.services
        }
        try{
            await house.addHouse(newHouse);
            res.sendStatus(200);
        }
        catch(err){
            console.log(err)
            res.status(400).send({
                error:"Error al añadir casa"
            });
        }
       
    }

    async getHouse(req, res) {
        let h = await house.getHouseById(req.user.house);
        res.json(h);
    }

    async editHouse(req, res) {
        // Validate User


        let newHouse = {
            hid: req.body.hid,
            title: req.body.title,
            type: req.body.type,
            description: req.body.description,
            ownerId: req.user.uid,//req.user.id 
            addressLine: req.body.address,
            zipCode: req.body.zipcode,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            cost: req.body.cost,
            roommatesLimit: req.body.roomlimit,
            roommatesCount: req.body.roomCount,
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
        h.foto = result.url;
        house.updateHouse(h);
        res.sendStatus(200);
    }

    async getHousePhoto(req, res) {
        let h = await house.getHouseById(req.user.house);
        await download(h.foto,path.join(__dirname, '../temp/' ));
        res.sendFile(path.join(__dirname, '../temp/' + req.params.photo));
    }
}

const HouseController = new HouseControl();
module.exports = HouseController;