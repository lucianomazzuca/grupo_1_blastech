const path = require('path');
const dbProducts = require(path.join(__dirname, '..', 'data', 'dbProducts'));
const fs = require('fs');
 
 module.exports = {
    listado: function(req,res){
        let productos = dbProducts;
        
        res.render('listado', { 
            title: 'Blastech',
            css:'listado.css',
            productos: productos,
        })
        
    },
    detail: function (req, res) {
        res.render('detail', {
            title: 'Detalle de producto',
            css: 'detail.css',
        })
    },
    cart: function (req, res) {
        res.render('cart', {
            title: 'Carrito de compras',
            css: 'cart.css',
        })
    },
    cargaDeProducto: function (req, res) {
        res.render('cargaDeProducto', {
            title: 'Carga de productos',
            css: 'carga-producto.css',
        })
    }

}


