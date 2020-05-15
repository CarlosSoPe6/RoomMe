'use strict'

const router = require('express').Router()
const controller = require('./../controllers/user.controller');
const requireAuth = require('./../middlewares/requireAuth');

router.get('/', controller.getAllUsers);

router.get('/me', requireAuth, controller.getMe);
// router.post('/me', requireAuth, controller.updatePhoto); // TODO: Generalize photo uploading
router.put('/me', requireAuth, controller.updateUser);
router.put('/me/house', requireAuth, controller.updateUserHouse);

router.get('/:id', controller.getUser);
router.get('/:id/contacts', controller.getContacts);
router.get('/:id/image', controller.getImage);

router.put('/houses', requireAuth, controller.updateUsersHouse);

module.exports = router;
