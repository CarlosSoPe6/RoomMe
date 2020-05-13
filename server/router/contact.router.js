'use strict';

const router = require('express').Router();
const controller = require('./../controllers/contact.controller');
const requireAuth = require('./../middlewares/requireAuth');

router.get('/', requireAuth, controller.getAllContacts);
router.post('/', requireAuth, controller.addContact);

router.patch('/:id', requireAuth, controller.updateContact);
router.delete('/:id', requireAuth, controller.deleteContact);

module.exports = router;