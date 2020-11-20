
const { check, validationResult, body } = require("express-validator");
const bcrypt = require("bcrypt");
const db = require('../database/models');

module.exports = [
    check("email").isEmail().withMessage("Debes ingresar un email valido"),

    check("oldpass").isLength({ min: 1 }).withMessage("Escribe tu contraseña"),

    //Validar si el email está en la bd
    body("email")
    .isEmail()
    .withMessage("Este email no ha sido registrado"),

    body('oldpass')
    .custom(function(value, {req}) {
        return db.Users.findOne({
            where: {
                email: req.body.email
            }
        })
        .then( user => {
            if(!bcrypt.compareSync(value, user.password)) {
                return Promise.reject('Credenciales inválidas')
            }
        })
        .catch(error => {
            return Promise.reject('Credenciales inválidas')
        })
    }),

    check('newpass')
    .isLength({
        min:2
    })
    .withMessage("Debes ingresar una nueva contraseña"),


];