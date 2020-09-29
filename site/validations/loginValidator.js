const dbUsers = require("../data/dbUsers");
const { check, validationResult, body } = require("express-validator");
const bcrypt = require("bcrypt");

module.exports = [
    check("email").isEmail().withMessage("Debes ingresar un email valido"),

    check("password").isLength({ min: 1 }).withMessage("Escribe tu contraseña"),

    //Validar si el email está en la bd
    body("email")
        .custom(function (value) {
            for (user of dbUsers) {
                if (user.email == value) {
                    return true;
                }
            }
            return false;
        })
        .withMessage("Este email no ha sido registrado"),

    //Validar si la contraseña coincide
    body("password")
        .custom(function (value, { req }) {
            for (user of dbUsers) {
                if (user.email == req.body.email) {
                    if (bcrypt.compareSync(value, user.password)) {
                        return true;
                    }
                }
            }

            return false;
        })
        .withMessage("La contraseña es incorrecta")
]
