var express = require('express');
var router = express.Router();
const logCheck = require('../middlewares/logCheck')
const guestCheck = require('../middlewares/guestCheck')

const usersController = require('../controllers/usersController.js');
const loginValidator = require('../validations/loginValidator');

const upImagesUsers = require('../middlewares/upImagesUsers');
const registerValidator = require('../validations/registerValidator');

router.get('/registro', usersController.registro);
router.post('/registro', upImagesUsers.any(), registerValidator, usersController.processRegister);

router.get('/login', guestCheck, usersController.login);
router.post('/login', loginValidator, usersController.processLogin);

router.get('/restablecer', usersController.restablecer);

router.get('/perfiles', usersController.perfil);
router.put('/perfiles/:id',upImagesUsers.any(),usersController.perfilEdit);

router.get('/logout', usersController.logout);

router.get('/listado', usersController.list);
router.get('/listado/search', usersController.listSearch);

router.delete('/delete/:id', usersController.delete);


module.exports = router;