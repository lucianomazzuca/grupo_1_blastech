var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.home);

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Iniciamos Sesion!' });
});

router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'Nos Registramos!' });
});

router.get('/restablecer', function(req, res, next) {
  res.render('restablecer', { title: 'Contraseña Cambiada!' });
});

router.get('/cargaDeProducto', function(req, res, next) {
  res.render('cargaDeProducto', { title: 'Producto Cargado' });
});

module.exports = router;
