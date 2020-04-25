'use strict'

const service = require('../model/Service');

class ServiceControl {
    async getServices(req, res) {
       let services = service.getAllService();
       res.json(services);
    }

    
}

const ServiceController = new ServiceControl();
module.exports = ServiceController;