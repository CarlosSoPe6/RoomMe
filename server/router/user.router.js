'use strict'

const router = require('express').Router()
const controller = require('./../controllers/user.controller');

router.get('/:id', controller.getUser);

module.exports = router;
