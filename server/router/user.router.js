'use strict'

const router = require('express').Router()
const controller = require('./../controllers/user.controller');
const requireAuth = require('./../middlewares/requireAuth');

router.get('/', controller.getAllUsers);

router.get('/me', requireAuth, controller.getMe);
router.put('/me', requireAuth, controller.updateUser);
router.put('/me/house', requireAuth, controller.updateUserHouse);

router.get('/:id', controller.getUser);
router.get('/:id/contacts', controller.getContacts);

module.exports = router;
