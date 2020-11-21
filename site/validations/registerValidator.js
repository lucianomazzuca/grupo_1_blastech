const {check,validationResult,body} = require('express-validator');


const db = require('../database/models');

module.exports = [
    check('first_name')
    .isLength({
        min:2
    })
    .withMessage("Debes ingresar tu nombre"),

    check('last_name')
    .isLength({
        min:2
    })
    .withMessage("Debes ingresar tu apellido"),

    check('email')
    .isEmail()
    .withMessage("Debes ingresar un email válido"),

    body('email')
    .custom( function(value) {
        return db.Users.findOne({
            where: {
                email: value,
            }
        })
        .then( user => {
            if(user) {
                return Promise.reject('Este mail ya está registrado')
            }
        })
    }),

    check('pass')
    .isLength({
        min:6,
        max:16
    })
    .withMessage("Debes ingresar una contraseña entre 6 y 16 caracteres"),

    body('pass2')
    .custom((value,{req}) => {
        if(value != req.body.pass){
            return false
        }
        return true
    })
    .withMessage("Las constraseñas no coiciden"),

    body('avatar')
    .custom((value,{req}) =>{
        if(req.fileValidationError){
            return false
        }else{
            return true
        }
    })
    .withMessage("Solo se permite png, jpg, jpeg, gif")

    
]