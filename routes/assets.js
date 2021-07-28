const express = require('express');
const router = express.Router();

const assetsController = require('../controllers/assets');
const { isLoggedIn } = require('./index');


router.get('/', isLoggedIn, assetsController.index);
router.get('/new', isLoggedIn, assetsController.new);

router.post('/new', isLoggedIn, assetsController.create);




module.exports = router;
