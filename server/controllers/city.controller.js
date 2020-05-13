'use strict'

const city = require('../model/City');

class CityControl {
    async getCities(req, res) {
       let cities = await city.getAllCities();
       res.json(cities);
    }

}

const CityController = new CityControl();
module.exports = CityController;