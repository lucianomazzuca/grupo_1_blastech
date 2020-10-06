var express = require('express');
var router = express.Router();
const logCheck = require('../middlewares/logCheck')
const guestCheck = require('../middlewares/guestCheck')

const usersController = require('../controllers/usersController.js');
const loginValidator = require('../validations/loginValidator');

const upImagesUsers = require('../middlewares/upImagesUsers')

router.get('/registro', usersController.registro);
router.post('/registro',upImagesUsers.any(), usersController.processRegister);

router.get('/login', guestCheck, usersController.login);
router.post('/login', loginValidator, usersController.processLogin);

router.get('/restablecer', usersController.restablecer);

router.get('/perfiles', logCheck, usersController.perfil);

router.get('/logout', usersController.logout);


module.exports = router;