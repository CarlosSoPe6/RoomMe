'use strict';

const router = require('express').Router();
const PollController = require('./../controllers/poll.controller');

router.get('/', PollController.pollGetByHouse);
router.post('/', PollController.pollCreate);

router.get('/:id', PollController.pollGetSingle);
router.put('/:id', PollController.pollUpdate);
router.delete('/:id', PollController.pollDelete);
router.post('/:id', PollController.pollAnswer);

module.exports = router;
