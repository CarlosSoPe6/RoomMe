'use strict';

const router = require('express').Router();
const controller = require('./../controllers/contact.controller');

router.get('/', controller.getAllContacts);
router.post('/', controller.addContact);

router.patch('/:id', controller.updateContact);
router.delete('/:id', controller.deleteContact);

module.exports = router;