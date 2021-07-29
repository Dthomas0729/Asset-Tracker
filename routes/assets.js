const express = require('express');
const router = express.Router();

const assetsController = require('../controllers/assets');
const { isLoggedIn } = require('./index');


router.get('/', isLoggedIn, assetsController.index);
router.get('/new', isLoggedIn, assetsController.new);

router.get('/:id/update', isLoggedIn, assetsController.update);
router.get('/:id/delete', isLoggedIn, assetsController.delete);

router.post('/new', isLoggedIn, assetsController.create);
router.post('/:id/update', isLoggedIn, assetsController.update);
router.post('/:id/delete', isLoggedIn, assetsController.delete);




module.exports = router;
