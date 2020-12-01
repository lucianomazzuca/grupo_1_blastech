var express = require('express');
var router = express.Router();

const productsController = require('../controllers/productsController.js')

const multer = require('multer');
const path = require('path');
const logCheck = require('../middlewares/logCheck')
const adminCheck = require('../middlewares/adminCheck');
const productEditValidator = require('../validations/productEditValidator.js');
const productCreateValidator = require('../validations/productCreateValidator.js');
const productValidator = require('../validations/productValidator.js');
const upImagesProducts = require('../middlewares/upImagesProducts.js');



router.get('/', productsController.listado);
router.get('/category/:categoria', productsController.category);

router.get('/detail/:id', productsController.detail);
router.get('/cargar', productsController.cargaDeProducto);
router.get('/cart', productsController.cart);
router.get('/search',productsController.search);

router.get('/cargar/productos',logCheck, adminCheck, productsController.cargar);
router.post('/cargar/productos', upImagesProducts.any(), productCreateValidator,  productsController.subir);

//Admin
router.get('/editlist', logCheck, adminCheck,productsController.editList);
router.get('/show/:id', logCheck, adminCheck, productsController.show)
router.put('/edit/:id', logCheck, adminCheck, upImagesProducts.any(), productEditValidator, productsController.edit)

router.delete('/delete/:id',adminCheck, productsController.eliminar)

module.exports = router;