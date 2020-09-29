const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');
const { runInNewContext } = require('vm');
const dbUsers = require(path.join(__dirname,'..','data','dbUsers'));


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
            res.send('Logeado exitosamente')
        }
        else{
            errors.errors.forEach(element => {
                res.write(element.msg + '\n')
            });
            res.end(); 
        }


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


