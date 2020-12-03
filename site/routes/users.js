var express = require('express');
var router = express.Router();
const logCheck = require('../middlewares/logCheck')
const guestCheck = require('../middlewares/guestCheck')

const usersController = require('../controllers/usersController.js');
const loginValidator = require('../validations/loginValidator');

const upImagesUsers = require('../middlewares/upImagesUsers');
const registerValidator = require('../validations/registerValidator');
const userEditValidator = require('../validations/userEditValidator');
const restablecerValidator = require('../validations/restablecerValidator');

router.get('/registro', usersController.registro);
router.post('/registro', upImagesUsers.any(), registerValidator, usersController.processRegister);

router.get('/login', guestCheck, usersController.login);
router.post('/login', loginValidator, usersController.processLogin);

router.get('/restablecer', logCheck, usersController.restablecer);
router.put('/restablecer/:id', restablecerValidator, usersController.processRestablecer);

router.get('/perfiles', usersController.perfil);
router.put('/perfiles/:id', upImagesUsers.any(), userEditValidator, usersController.perfilEdit);

router.get('/logout', usersController.logout);

router.get('/listado/all/:page', usersController.list);
router.get('/listado/search/:page', usersController.listSearch);

router.get('/show/:id', usersController.show);
router.put('/admin-edit/:id', upImagesUsers.any(), usersController.adminEdit);

router.delete('/delete/:id', usersController.delete);


module.exports = router;