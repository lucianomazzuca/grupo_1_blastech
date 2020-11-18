const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op, where } = require("sequelize");

const dbUsers = require(path.join(__dirname, "..", "data", "dbUsers"));
const dbProducts = require(path.join(__dirname, "..", "data", "dbProducts"));

module.exports = {
    login: function (req, res) {
        res.render("login", {
            title: "Ingresa tus datos",
            css: "login.css",
            
        });
    },
    processLogin: function (req, res) {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Users.findOne({
                where: {
                    email: req.body.email,
                },
            })
            .then((user) => {
                req.session.user = {
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    image: user.image,
                    category: user.category,
                };
                if (req.body.recordar) {
                    res.cookie("user", req.session.user, {
                        maxAge: 1000 * 60 * 60,
                    });
                }
                res.locals.user = req.session.user;
                return res.redirect("/");
            })
            .catch((error) => {
                res.send(error);
            });
        } else {
            res.render("Login", {
                title: "Ingresar",
                css: "login.css",
                errors: errors.mapped(),
                old: req.body,
                script : "userLogin.js",
                
            });
        }
    },
    registro: function (req, res) {
        res.render("registro", {
            title: "Registro de Usuario",
            css: "register.css",
            
        });
    },
    processRegister: function (req, res) {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Users.create({
                first_name: req.body.first_name.trim(),
                last_name: req.body.last_name.trim(),
                email: req.body.email.trim(),
                password: bcrypt.hashSync(req.body.pass, 10),
                image: req.files[0] ? req.files[0].filename : "default.png",
                category: "user",
            })
                .then((usuario) => {
                    console.log(usuario);
                    return res.redirect("/users/login");
                })
                .catch((error) => {
                    res.send(error);
                });
        } else {
            res.render("registro", {
                title: "Registro de usuario",
                css: "register.css",
                errors: errors.mapped(),
                old: req.body,
                script : "userRegistro.js",
            });
        }
    },

    restablecer: function (req, res) {
        res.render("restablecer", {
            title: "Reestablecer contraseña",
            css: "login.css",
        });
    },
    perfil: function (req, res) {
        db.Users.findByPk(req.session.user.id)
          .then(user => {
            res.render('perfilUser', {
                title: 'Perfil de Usuario',
                css: 'perfil.css',
                user: user,
                productos: dbProducts.filter(producto =>{
                    return producto.category != "visited" && producto.category != "in-sale"
                })
            })
          })
          .catch( error => {
            res.send(error)
          })
    },
    perfilEdit: function (req, res) {
        db.Users.update({
            date: req.body.date,
           
            adress: req.body.adress,
            city: req.body.city,
            province: req.body.province
        },
        {
            where : {
                id : req.params.id
            }
        })
        .then( result => {
            console.log(result)
            res.redirect("/users/perfiles",{
                script : "userEdit.js",
            });
        })
        .catch( err => {
            res.send(err)
        })
    },
    logout: function (req, res) {
        req.session.destroy();
        if (req.cookies.user) {
            res.cookie("user", " ", { maxAge: -1 });
        }
        return res.redirect("/");
    },
    list: function (req, res) {
        db.Users.findAll().then((usuarios) => {
            res.render("listadoUsuarios", {
                title: "Listado de usuarios",
                css: "listado-usuarios.css",
                usuarios,
            });
        });
    },
    listSearch: function (req, res) {
        let term = req.query.term;
        term = term.trim().toLowerCase();

        db.Users.findAll({
            where: {
                [Op.or]: [
                    { first_name: { [Op.like]: "%" + term + "%" } },
                    { last_name: { [Op.like]: "%" + term + "%" } },
                    { email: { [Op.like]: "%" + term + "%" } },
                ],
            },
        }).then((usuarios) => {
            res.render("listadoUsuarios", {
                title: "Listado de usuarios",
                css: "listado-usuarios.css",
                usuarios,
            });
        });
    },
    delete: function(req, res) {
        db.Users.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/users/listado')
        })
        .catch(errores => {
            res.send(errores)
        })
    },
};
