const express = require('express');
const router = express.Router();

const assetsController = require('../controllers/assets');
const { isLoggedIn } = require('./index');


router.get('/', isLoggedIn, assetsController.index);
router.get('/new', isLoggedIn, assetsController.new);

router.get('/update', isLoggedIn, assetsController.update)
router.get('/delete', isLoggedIn, assetsController.deleteList);

router.get('/:id/details', isLoggedIn, assetsController.details);
router.get('/:id/update', isLoggedIn, assetsController.updateForm);
router.get('/:id/delete', isLoggedIn, assetsController.deleteForm);

router.post('/new', isLoggedIn, assetsController.create);
router.post('/:id/update', isLoggedIn, assetsController.update);
router.post('/:id/delete', isLoggedIn, assetsController.delete);




module.exports = router;
