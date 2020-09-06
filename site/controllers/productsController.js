
 
 module.exports = {
    home: function(req,res){
        res.render('listado', { 
            title: 'Blastech',
            css:'index.css',
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
            css: '',
        })
    }

}


