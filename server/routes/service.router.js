const route = require("express").Router();
const HouseController = require("../controllers/house.controller");

route.get('/', HouseController.getHouse);
route.post('/', HouseController.add);

module.exports = route;