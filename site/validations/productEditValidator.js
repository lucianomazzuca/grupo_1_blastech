const {check, validatorResult, body} = require('express-validator')

module.exports = [

    check('model')
    .isLength({
        min:2
    })
    .withMessage('El modelo del producto es obligatorio'),



    check('category')
    .isLength({
        min:1
    })
    .withMessage('Especifique categoria'),



    check('brand')
    .isLength({
        min:1
    })
    .withMessage('Especifique una marca'),



    check('description')
    .isLength({
        min:20
    })
    .withMessage('La descripcion del producto es obligatoria'),
    



    check('price')
    .isDecimal({min:1}).withMessage('Debes ingresar un valor válido'),
]
