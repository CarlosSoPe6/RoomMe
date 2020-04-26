'use strict';

const router = require('express').Router();

router.get('/', controller.getAllContacts);
router.post('/', controller.addContact);

router.get('/:id', controller.getSigngleContact);
router.patch('/:id', controller.updateContact);
router.delete('/:id', controller.deleteContact);

module.exports = router;