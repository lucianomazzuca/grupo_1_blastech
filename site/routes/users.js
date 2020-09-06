var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController.js');

router.get('/login', usersController.login);
router.get('/registro', usersController.registro);
router.get('/restablecer', usersController.restablecer);


module.exports = router;