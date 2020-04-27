'use strict'

const service = require('../model/Service');

class ServiceControl {
    async getServices(req, res) {
       let services = await service.getAllServices();
       res.json(services);
    }

    async getServiceById(req, res) {
        console.log(req.params.id);
        let s = await service.getService(req.params.id);
        res.json(s);
    }

    
}

const ServiceController = new ServiceControl();
module.exports = ServiceController;