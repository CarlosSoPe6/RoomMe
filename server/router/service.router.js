const route = require("express").Router();
const ServiceController = require("../controllers/service.controller");
const requireAuth = require('./../middlewares/requireAuth');

route.get('/', requireAuth, ServiceController.getServices);
route.get('/:id', requireAuth, ServiceController.getServiceById);

module.exports = route;