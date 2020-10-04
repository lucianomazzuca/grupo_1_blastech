var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController.js');
const loginValidator = require('../validations/loginValidator');

const upImagesUsers = require('../middlewares/upImagesUsers')

router.get('/registro', usersController.registro);
router.post('/registro',upImagesUsers.any(), usersController.processRegister);

router.get('/login', usersController.login);
router.post('/login', loginValidator, usersController.processLogin);

router.get('/restablecer', usersController.restablecer);

router.get('/perfiles',usersController.perfil);


module.exports = router;