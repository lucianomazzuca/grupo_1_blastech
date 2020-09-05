var express = require('express');
var router = express.Router();

const detailController = require('../controllers/detailController');
const listadoController = require('../controllers/listadoController');
const cargarProductoController = require('../controllers/cargarProductoController');


router.get('/detail', detailController.detail);
router.get('/listado', listadoController.listado);
router.get('/cargar', cargarProductoController.cargar);

module.exports = router;