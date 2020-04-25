'use strict'

const house = require('../model/House');

class HouseControl {
    async add(req, res) {
        console.log(req.body);
        let newHouse = {
            title: req.body.title,
            description: req.body.description,
            ownerId: req.body.owner,//Change later to req.user 
            addressLine: req.body.address,
            zipCode: req.body.zipcode,
            cityId: req.body.city,
            cost: req.body.cost,
            paymentday: req.body.paymentday,
            roommatesLimit: req.body.roomlimit,
            roommatesCount: req.body.roomcount,
            calendarURL: req.body.calendar,
            playlistURL: req.body.playlist,
            foto: req.body.foto,
            services: req.body.services
        }
        console.log(newHouse);
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
        // Check owner
        // Check house id
        let h = await house.getHouseByOwnerId(1);
        res.json(h);
    }

    async editHouse(req, res) {
        // Validate User


        let newHouse = {
            hid: req.body.hid,
            title: req.body.title,
            description: req.body.description,
            ownerId: req.body.owner,//Change later to req.user 
            addressLine: req.body.address,
            zipCode: req.body.zipcode,
            cityId: req.body.city,
            cost: req.body.cost,
            paymentday: req.body.paymentday,
            roommatesLimit: req.body.roomlimit,
            roommatesCount: req.body.roomcount,
            calendarURL: req.body.calendar,
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
}

const HouseController = new HouseControl();
module.exports = HouseController;