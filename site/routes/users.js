var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController.js');
const loginValidator = require('../validations/loginValidator');

router.get('/registro', usersController.registro);

router.get('/login', usersController.login);
router.post('/login', loginValidator, usersController.processLogin);

router.get('/restablecer', usersController.restablecer);


module.exports = router;