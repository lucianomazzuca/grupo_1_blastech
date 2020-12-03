const {check,validationResult,body} = require('express-validator');

module.exports = [

    check('first_name')
    .isLength({
        min:2
    })
    .withMessage('Debes escribir un nombre'),

    check('last_name')
    .isLength({
        min:2
    })
    .withMessage('Debes escribir un apellido')


]