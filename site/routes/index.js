var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blastech' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Iniciamos Sesion!' });
});

router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'Nos Registramos!' });
});

router.get('/restablecer', function(req, res, next) {
  res.render('restablecer', { title: 'Contraseña Cambiada!' });
});

module.exports = router;
