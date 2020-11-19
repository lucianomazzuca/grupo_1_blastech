const {check,validationResult,body} = require('express-validator');

module.exports = [

    check('model')
    .isLength({
        min:2
    })
    .withMessage('El modelo del producto es obligatorio'),

    check('brand_id')
    .isLength({
        min:1
    })
    .withMessage('Especifique una marca'),

    check('id_categoria')
    .isLength({
        min:1
    })
    .withMessage('Especifique categoria'),


    check('price')
    .isInt({
        min:1
    }).withMessage('El producto debe tener un precio válido'),

    check('description')
    .isLength({
        min:20
    })
    .withMessage('La descripcion del producto es obligatoria'),

    body('images')
    .custom((value,{req})=>{
        if(!req.files[0]){
            return false
        }else{
            return true
        }
    })
    .withMessage("Tenés que subir una imagen")

    

]