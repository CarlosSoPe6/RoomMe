const route = require("express").Router();
const CityController = require("../controllers/city.controller");
const requireAuth = require('./../middlewares/requireAuth');

route.get('/', requireAuth, CityController.getCities);

module.exports = route;