const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');
const { runInNewContext } = require('vm');

const dbUsers = require(path.join(__dirname,'..','data','dbUsers'));
const dbProducts = require(path.join(__dirname, "..", "data", "dbProducts"));

module.exports = {
    login: function (req, res) {
        res.render('login', {
            title: 'Ingresa tus datos',
            css: 'login.css',
        })
    },
    processLogin: function(req, res) {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            for( user of dbUsers){
                if(user.email == req.body.email){
                    req.session.user = user;
                    break;
                }
            }
            if(req.body.recordar != undefined){
                res.cookie('user', req.session.user, {maxAge: 1000*60*60});
            }
            res.redirect('/');
        }
        else{
            res.render('login',{
                title: "Ingresar",
                css:"login.css",
                errors:errors.mapped(),
                old:req.body
            })
        }
    },
    registro: function (req, res) {
        res.render('registro', {
            title: 'Registro de Usuario',
            css: 'register.css',
        })
    },
    processRegister:function(req,res){
        //res.send(req.body)
        //res.send(req.files)
        let errors = validationResult(req);
        let lastID = 0;
        if(dbUsers.length != 0){
            dbUsers.forEach(user => {
                if(user.id > lastID){
                    lastID = user.id
                }
            })
        }
        if(errors.isEmpty()){
            let newUser = {
                id: lastID + 1,
                first_name: req.body.first_name.trim(),
                last_name: req.body.last_name.trim(),
                email: req.body.email.trim(),
                image: (req.files[0])?req.files[0].filename:"default.png",
                password:bcrypt.hashSync(req.body.pass,10),
                category:"user"
            }
            dbUsers.push(newUser);
            fs.writeFileSync(path.join(__dirname,'..','data','dbUsers.json'),JSON.stringify(dbUsers),'utf-8')
    
            return res.redirect('/users/login')
        }else{
            res.render('registro',{
                title:"Registro de Usuario",
                css:"register.css",
                errors:errors.mapped(),
                old:req.body
            })
        }
       
    },


    restablecer: function (req, res) {
        res.render('restablecer', {
            title: 'Reestablecer contraseña',
            css: 'login.css',
        })
    },
    perfil: function (req, res) {
        let usuarios = dbUsers

        res.render('perfilUser', {
            title: 'Perfil de Usuario',
            css: 'perfil.css',
            usuarios: dbUsers,
            productos: dbProducts.filter(producto =>{
                return producto.category != "visited" && producto.category != "in-sale"
            })
        })
    },
    perfilEdit: function (req, res) {

        let perfilEdit = {
            id: lastID + 1,
            first_name: req.body.nombre,
            last_name: req.body.apellido,
            email: req.body.email,
        }
        dbUsers.push(newUser);
        fs.writeFileSync(path.join(__dirname,'..','data','dbUsers.json'),JSON.stringify(dbUsers),'utf-8')
        res.render('perfilUser', {
            title: 'Perfil de Usuario',
            css: 'perfil.css',
            
        })
    },
    logout:function(req,res){
        req.session.destroy()
        if(req.cookies.user){
            res.cookie('user',' ',{maxAge:-1});
        }
        return res.redirect('/')
    },
    list: function(req, res) {

        res.render('listado-usuarios', {
            title: 'Listado de usuarios',
            css: 'listado-usuarios.css',
        })
    }
}




