'use strict'

const house = require('../model/House');
const hs = require('../model/HouseService');

class HouseControl {
    async add(req, res) {
        // Check Usuario
        let newHouse = {
            // Falta id
            title: req.body.title,
            description: req.body.description,
            owner: req.body.owner, //Add owner
            address: req.body.address,
            zipcode: req.body.zipcode,
            city: req.body.city,
            cost: req.body.cost,
            paymentday: req.body.paymentday,
            roomlimit: req.body.roomlimit,
            roomcount: req.body.roomcount,
            calendar: req.body.calendar,
            playlist: req.body.playlist
            // Falta foto
        }

        await house.addHouse(newHouse);

        // Añadir a servicios
        console.log(req.body.services);
    }

    async getHouse(req, res) {
        // Check owner
        // Check house id
        let h = house.getHouseById(/** */);
        res.json(h);
    }

    async editHouse(req, res) {
        // Get house id


        let newHouse = {
            title: req.body.title,
            description: req.body.description,
            owner: req.body.owner, //Add owner
            address: req.body.address,
            zipcode: req.body.zipcode,
            city: req.body.city,
            cost: req.body.cost,
            paymentday: req.body.paymentday,
            roomlimit: req.body.roomlimit,
            roomcount: req.body.roomcount,
            calendar: req.body.calendar,
            playlist: req.body.playlist
            // Falta foto
        }
        await house.updateHouse(newHouse);
        //Añadir servicios
        console.log(req.body.services);
    }
}

const HouseController = new HouseControl();
module.exports = HouseController;