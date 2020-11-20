
const route = require("express").Router();
const HouseController = require("../controllers/house.controller");
const requireAuth = require('./../middlewares/requireAuth');

route.get('/', requireAuth, HouseController.getHouse);
route.post('/', requireAuth, HouseController.add);
route.put('/', requireAuth, HouseController.editHouse);
route.get('/:id', requireAuth, HouseController.getHouseById);

route.get('/photo', requireAuth, HouseController.getHousePhoto);

module.exports = route;