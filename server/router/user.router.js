'use strict'

const router = require('express').Router()
const controller = require('./../controllers/user.controller');

router.get('/:id', controller.getUser);

router.get(':id/contact', controller.getAllContacts);
router.post(':id/contact', controller.addContact);

router.patch(':id/contact/:cid', controller.updateContact);
router.delete(':id/contact/:cid', controller.deleteContact);

module.exports = router;
