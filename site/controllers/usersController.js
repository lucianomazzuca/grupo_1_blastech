const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');
const dbUsers = require(path.join(__dirname,'..','data','dbUsers'));

module.exports = {
    login: function (req, res) {
        res.render('login', {
            title: 'Ingresa tus datos',
            css: 'login.css',
        })
    },
    processLogin: function(req, res) {
        res.send(req.body);

        
    },
    registro: function (req, res) {
        res.render('registro', {
            title: 'Registrate',
            css: 'login.css',
        })
    },
    restablecer: function (req, res) {
        res.render('restablecer', {
            title: 'Reestablecer contraseña',
            css: '',
        })
    },
    

}


