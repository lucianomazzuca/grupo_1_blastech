var express = require('express');
var router = express.Router();

const productsController = require('../controllers/productsController.js')


router.get('/', productsController.listado);
router.get('/:categoria', productsController.category);

router.get('/detail/:id', productsController.detail);
router.get('/cargar', productsController.cargaDeProducto);
router.get('/cart', productsController.cart);

router.get('/cargar/productos', productsController.cargar);
router.post('/cargar/productos', productsController.subir);

module.exports = router;