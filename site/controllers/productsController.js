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
        let productos = dbProducts;
        let idProducto = req.params.id;
        let producto = dbProducts.filter(producto=>{
            return producto.id == idProducto
        });

      
      let productoSeleccionado = dbProducts.filter(producto=>{
          return producto.id == idProducto
      });

      let productosRelacionados = dbProducts.filter( producto => {
          return producto.categoria == productoSeleccionado[0].categoria
      })
        // productos.forEach(producto => {
        //     if(producto.categoria == idProducto.categoria){
        //         productosRelacionados.push(producto)
        //     }
        // })
      
        res.render('detail', {
            title: 'Detalle de producto',
            css: 'detail.css',
            producto: producto[0],
            productos: productosRelacionados
        })
    },

    search:function(req,res){
        let categoriaProductos = [];
        let busqueda = req.query.search;
        if(busqueda == ""){
            res.redirect('/')
        }else{
            let productos = [];
            dbProducts.forEach(producto=>{
                if(producto.categoria.toLowerCase().includes(busqueda.toLowerCase())){
                    productos.push(producto)
                }
            })
            dbProducts.forEach(producto=>{
                if(producto.marca.toLowerCase().includes(busqueda.toLowerCase())){
                    productos.push(producto)
                }
            })
            res.render('listado',{
                title: "Resultado de la busqueda",
                css:"listado.css",
                productos:productos,
                categoria: categoriaProductos
            })
        }
     
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
       let nuevoProducto = {
           id:lastID +1,
           categoria:req.body.categoria,
           modelo:req.body.modelo,
           marca:req.body.marca,
           precio: Number(req.body.precio),
           descuento: Number(req.body.descuento),
           image: "",
           descripcion: req.body.descripcion,
       }

       console.log(nuevoProducto)
       dbProducts.push(nuevoProducto);
       fs.writeFileSync(path.join(__dirname,"..","data","productsDataBase.json"),JSON.stringify(dbProducts),'utf-8')
       res.redirect('/products')
    },
    editList: function(req,res){
        let productos = dbProducts;
        let categoriaProductos = [];

        //Obtener categorias no repetidas
        productos.forEach(producto => {
            if(categoriaProductos.includes(producto.categoria) == false){
                categoriaProductos.push(producto.categoria)
            }
        })

        res.render('listadoEdit', {
            title: 'Edit',
            css: 'listadoEdit.css',
            productos: productos,
            categoria: categoriaProductos,
        })
    },
    show: function(req,res){

        let productoSeleccionado = dbProducts.filter(producto => {
            return producto.id == req.params.id
        })

        let categorias = [];
        dbProducts.forEach( producto => {
            if(categorias.indexOf(producto.categoria) == -1){
                categorias.push(producto.categoria)
            }
        })

        res.render('editForm', {
            title: 'Editar producto',
            css: 'editForm.css',
            productos: dbProducts,
            productoSeleccionado: productoSeleccionado[0],
            categorias
        })
    },
    edit: function(req,res){
        
        dbProducts.forEach(producto => {
            if(producto.id == req.body.id){
                producto.id = Number(req.body.id);
                producto.modelo = req.body.modelo.trim();
                producto.marca = req.body.marca.trim();
                producto.categoria = req.body.categoria;
                producto.descripcion = req.body.descripcion;
                producto.descuento = Number(req.body.descuento);
                producto.precio = Number(req.body.precio);
                producto.image = producto.image;
            }
        })

        fs.writeFileSync(path.join(__dirname,'../data/productsDataBase.json'),JSON.stringify(dbProducts),'utf-8');
        res.redirect('/products/editlist')
    },
    eliminar:function(req,res){
        let idProducto = req.params.id;
        dbProducts.forEach(producto =>{
            if(producto.id == idProducto){
                var eliminar = dbProducts.indexOf(producto)
                dbProducts.splice(eliminar,1)
            }
        })
        fs.writeFileSync(path.join(__dirname,'../data/productsDataBase.json'),JSON.stringify(dbProducts))
        res.redirect('/products/edit')
    }
}


