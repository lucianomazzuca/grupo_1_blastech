var express = require('express');
var router = express.Router();

/* GET home page. */
const detailController = require('../controllers/detailController');


router.get('/detail', detailController.detail);

module.exports = router;