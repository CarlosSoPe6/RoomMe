'use strict';

const router = require('express').Router();
const PollController = require('./../controllers/poll.controller');
const requireAuth = require('./../middlewares/requireAuth');

router.get('/', requireAuth, PollController.pollGetByHouse);
router.post('/', requireAuth, PollController.pollCreate);

router.get('/:id', requireAuth, PollController.pollGetSingle);
router.put('/:id', requireAuth, PollController.pollUpdate);
router.delete('/:id', requireAuth, PollController.pollDelete);
router.post('/:id', requireAuth, PollController.pollAnswer);

router.get('/:id/answers', requireAuth, PollController.pollGetAnswers);

module.exports = router;
