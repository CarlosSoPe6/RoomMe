const route = require("express").Router();
const ServiceController = require("../controllers/service.controller");

route.get('/', ServiceController.getServices);
route.get('/:id', ServiceController.getServiceById);

module.exports = route;