const router = require('express').Router();
const registerController = require('../controllers/signup.controller');

router.post('/', registerController.registerUser);

module.exports = router;