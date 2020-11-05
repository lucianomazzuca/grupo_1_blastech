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
        let product = db.Products.findOne({
            where : {
                id : req.params.id
            },
            include : [
                {
                    association : 'brands'
                },
                {
                    association : 'categories'
                }
            ]
        });

        let brands = db.Brands.findAll({
            order : [
                ['brand_name','ASC']
            ]
        });
        let categories = db.Categories.findAll({
            order : [
                ['category_name','ASC']
            ]
        });
        Promise.all([product,brands,categories])
        .then(([product,brands,categories]) => {
            res.render('editForm',{
                title: "Blastech",
                css: "editForm.css",
                brands : brands,
                categories : categories,
                product : product
            })
        })
    },
    edit: function (req, res, next) {
        db.Products.update({
            model: req.body.model,
            price: req.body.price,
            discount: req.body.discount,
            description: req.body.description,
            category_id: req.body.category,
            brand_id: req.body.brand,
            images: (req.files[0]) ? req.files[0].filename : req.body.image
        },
            {
                where: {
                    id: req.params.id
                }
            })

            .then(() => {
                res.redirect('/products/editList/')
           })
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
