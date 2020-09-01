var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('enviar-email', { title: 'Envianos un email!' });
});

module.exports = router;
