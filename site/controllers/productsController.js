const path = require("path");
const dbProducts = require(path.join(__dirname, "..", "data", "dbProducts"));
const fs = require("fs");
const db = require("../database/models");
const {validationResult} = require('express-validator');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

module.exports = {
    listado: function (req, res) {
        let productos = db.Products.findAll({
            include: [
                {
                    association: 'brands',
                },
                {
                    association: 'categories',
                },
            ]
        });

        let categorias = db.Categories.findAll();

        Promise.all([productos, categorias])
        .then(([productos, categorias]) => {
            res.render('listado',{
                title: "Blastech",
                css: "listado.css",
                productos: productos,
                categorias: categorias,
            })
        })

    },
    category: function (req, res) {
        let categorias = db.Categories.findAll();

        let productosFiltrados = db.Products.findAll({
            include: [
                {
                    model: db.Categories,
                    as: 'categories',
                    where: {
                        category_name: { [Op.eq]: req.params.categoria.toLowerCase() } 
                    }
                },
                {
                    association: 'brands',
                },
            ],
        })

        Promise.all([productosFiltrados, categorias])
        .then(([productosFiltrados, categorias]) => {
            res.render('listado',{
                title: "Blastech",
                css: "listado.css",
                productos: productosFiltrados,
                categorias,
            })
        })

    },
    detail: function (req, res) {
        let productos = dbProducts;
        let idProducto = req.params.id;
        let producto = dbProducts.filter((producto) => {
            return producto.id == idProducto;
        });

        let productoSeleccionado = dbProducts.filter((producto) => {
            return producto.id == idProducto;
        });

        let productosRelacionados = dbProducts.filter((producto) => {
            return producto.categoria == productoSeleccionado[0].categoria;
        });
        // productos.forEach(producto => {
        //     if(producto.categoria == idProducto.categoria){
        //         productosRelacionados.push(producto)
        //     }
        // })

        res.render("detail", {
            title: "Detalle de producto",
            css: "detail.css",
            producto: producto[0],
            productos: productosRelacionados,
        });
    },

    search: function (req, res) {

        let term = req.query.search;
        term = term.trim().toLowerCase();

        let productosFiltrados = db.Products.findAll({
            include: [
                {
                    model: db.Categories,
                    as: 'categories',
                },
                {
                    model: db.Brands,
                    as: 'brands',
                },
            ],
            where: {
                [Op.or]: [
                    { model: { [Op.like]: "%" + term + "%" } },
                    { '$categories.category_name$': { [Op.like]: "%" + term + "%" } },
                    { '$brands.brand_name$': { [Op.like]: "%" + term + "%" } },
                ],
            }
        })
        
        let categorias = db.Categories.findAll();

        Promise.all([productosFiltrados, categorias])
        .then(([productosFiltrados, categorias]) => {
            res.render('listado',{
                title: "Blastech",
                css: "listado.css",
                productos: productosFiltrados,
                categorias,
            })
        })
    },
    cart: function (req, res) {
        res.render("cart", {
            title: "Carrito de compras",
            css: "cart.css",
        });
    },
    cargaDeProducto: function (req, res) {
        res.render("cargaDeProducto", {
            title: "Carga de productos",
            css: "carga-producto.css",
        });
    },
    cargar: function (req, res) {


        let marcas = db.Brands.findAll({});

        let categorias = db.Categories.findAll();

        Promise.all([marcas, categorias])
        .then(([marcas, categorias]) => {
            res.render("cargaDeProducto",{
                title: "Carga de productos",
                css: "carga-producto.css",
                marcas: marcas,
                categorias: categorias,
            })
        })

        
    },
    subir: function (req, res) {

        let errors = validationResult(req)

        if(errors.isEmpty()){
            db.Products.create({
                category_id: req.body.id_categoria,
                model: req.body.model,
                brand_id:req.body.brand_id,
                price: req.body.price,
                discount: req.body.discount,
                images: (req.files[0])?req.files[0].filename: "default-image.png",
                description: req.body.description,
                features: "",
                status: "",
            })
            .then(()=>{
                return res.redirect('/products')
            })
        }
    },
    editList: function (req, res) {
        let productos = db.Products.findAll({
            include: [
                {
                    association: 'brands',
                },
                {
                    association: 'categories',
                },
            ]
        });

        let categorias = db.Categories.findAll();

        Promise.all([productos, categorias])
        .then(([productos, categorias]) => {
            res.render('listadoEdit',{
                title: "Blastech",
                css: "listadoEdit.css",
                productos: productos,
                categorias: categorias,
            })
        })

    },
    show: function (req, res) {
        let productoSeleccionado = dbProducts.filter((producto) => {
            return producto.id == req.params.id;
        });

        let categorias = [];
        dbProducts.forEach((producto) => {
            if (categorias.indexOf(producto.categoria) == -1) {
                categorias.push(producto.categoria);
            }
        });

        res.render("editForm", {
            title: "Editar producto",
            css: "editForm.css",
            productos: dbProducts,
            productoSeleccionado: productoSeleccionado[0],
            categorias,
        });
    },
    edit: function (req, res, next) {
        dbProducts.forEach((producto) => {
            if (producto.id == req.body.id) {
                producto.id = Number(req.body.id);
                producto.modelo = req.body.modelo.trim();
                producto.marca = req.body.marca.trim();
                producto.categoria = req.body.categoria;
                producto.descripcion = req.body.descripcion.trim();
                producto.descuento = Number(req.body.descuento);
                producto.precio = Number(req.body.precio);
                producto.image = req.files[0]
                    ? req.files[0].filename
                    : producto.image;
            }
        });

        fs.writeFileSync(
            path.join(__dirname, "../data/productsDataBase.json"),
            JSON.stringify(dbProducts),
            "utf-8"
        );
        console.log(req.session.user)
        return res.redirect("/products/editlist");
    },
    eliminar: function (req, res) {
        let idProducto = req.params.id;
        dbProducts.forEach((producto) => {
            if (producto.id == idProducto) {
                var eliminar = dbProducts.indexOf(producto);
                dbProducts.splice(eliminar, 1);
            }
        });
        fs.writeFileSync(
            path.join(__dirname, "../data/productsDataBase.json"),
            JSON.stringify(dbProducts)
        );
        res.redirect("/products/editlist");
    },
};
