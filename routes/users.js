const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');
const { isLoggedIn } = require('./index');

router.get('/', isLoggedIn, userController.index)

module.exports = router;
