var express = require('express');
var router = express.Router();

const productsController = require('../controllers/productsController.js')


router.get('/', productsController.listado);
router.get('/detail', productsController.detail);
router.get('/cargar', productsController.cargaDeProducto);
router.get('/cart', productsController.cart);

module.exports = router;