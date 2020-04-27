'use strict'

const router = require('express').Router()
const controller = require('./../controllers/user.controller');

router.get('/', controller.getAllUsers);

router.get('/:id', controller.getUser);
router.get('/:id/contacts', controller.getContacts);

router.get('/me', controller.getMe);
router.put('/me', controller.updateUser);

module.exports = router;
