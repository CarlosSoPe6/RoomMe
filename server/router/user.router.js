'use strict'

const router = require('express').Router()
const controller = require('./../controllers/user.controller');

router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUser);
router.put('/:id', controller.updateUser);
router.get('/:id/contacts', controller.getContacts);
router.get('/me', controller.getMe);

module.exports = router;
