const path = require('path');
const dbProducts = require(path.join(__dirname, '..', 'data', 'dbProducts'));
const fs = require('fs');
 
 module.exports = {
    listado: function(req,res){
        let productos = dbProducts;
        let categoriaProductos = [];

        //Obtener categorias no repetidas
        productos.forEach(producto => {
            if(categoriaProductos.includes(producto.categoria) == false){
                categoriaProductos.push(producto.categoria)
            }
        })

        res.render('listado', { 
            title: 'Blastech',
            css:'listado.css',
            productos: productos,
            categoria: categoriaProductos,
        })
        
    },
    category:function(req,res){
        let productos = dbProducts;
        let categoriaSolicitada = req.params.categoria.toLowerCase()
        let categoriaProductos = [];

        //filtrar productos por categoria
        let productosFiltrados = productos.filter(producto => {
            if(producto.categoria.toLowerCase() == categoriaSolicitada){
                return producto
            }             
        })

        //Obtener categorias no repetidas
        productos.forEach(producto => {
            if(categoriaProductos.includes(producto.categoria) == false){
                categoriaProductos.push(producto.categoria)
            }
        })


        res.render('listado', {
            title: req.params.categoria,
            css:'listado.css',
            productos: productosFiltrados,
            categoria: categoriaProductos,
        })
    },
    detail: function (req, res) {
        idProducto = req.params.id;
        let producto = dbProducts.filter(producto=>{
            return producto.id == idProducto
        });
        res.render('detail', {
            title: 'Detalle de producto',
            css: 'detail.css',
            producto: producto[0]
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
    },
    cargar: function (req, res) {
        res.render('cargaDeProducto', {
            title: 'Carga de productos',
            css: 'carga-producto.css',
        })
    },
    subir: function (req, res) {
        let lastID = 1;
       dbProducts.forEach(producto=>{
           if(producto.id > lastID){
               lastID = producto.id
           }
       })
       let newProduct = {
           id:lastID +1,
           categoria:req.body.categoria,
           modelo:req.body.modelo,
           marca:req.body.marca,
           precio: Number(req.body.precio),
           descuento: Number(req.body.descuento),
           image: "",
           descripcion: req.body.descripcion,
       }

       console.log(newProduct)
       dbProducts.push(newProduct);
       fs.writeFileSync(path.join(__dirname,"..","data","productsDataBase.json"),JSON.stringify(dbProducts),'utf-8')
       res.redirect('/products')
    }

}


