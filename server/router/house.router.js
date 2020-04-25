
const route = require("express").Router();
const HouseController = require("../controllers/house.controller");

route.get('/', HouseController.getHouse);
route.post('/', HouseController.add);
route.put('/', HouseController.editHouse);

module.exports = route;