const path = require('path');
const dbProducts = require(path.join(__dirname, '..', 'data', 'dbProducts'));


module.exports = {
    // home: function(req,res){
    //     let productos = dbProducts;
    //     res.render('index', { 
    //         title: 'Blastech',
    //         css:'index.css',
    //     })
        
        
    // },
    home:function(req,res){
        let destacados = dbProducts.filter(producto=>{
            return producto.status == "visited"
        })
        
        let ofertas = dbProducts.filter(producto=>{
            return producto.status == "in-sale"
        })

        res.render('index', { 
            title: 'Mercado Liebre',
            css:'index.css',
            destacados: destacados,
            ofertas:ofertas
        });
    },
    email: function (req, res) {
        res.render('email', {
            title: 'Dejanos tu email!',
            css: 'enviar-email.css',
        })
    }
}