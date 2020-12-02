const path = require('path');
const dbProducts = require(path.join(__dirname, '..', 'data', 'dbProducts'));
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

module.exports = {

    home:function(req,res){
        let destacados = db.Products.findAll({
            include: [
                {
                    association: 'brands',
                },
                {
                    association: 'categories',
                },
            ],
            where: {
                status: { [Op.eq]: 'destacado' }
            }
        })

        let ofertas = db.Products.findAll({
            include: [
                {
                    association: 'brands',
                },
                {
                    association: 'categories',
                },
            ],
            where: {
                status: { [Op.eq]: 'in-sale' }
            }
        })
        
        Promise.all([destacados, ofertas])
        .then(([destacados, ofertas]) => {
            res.render('index', {
                title: 'Blastech',
                css:'index.css',
                destacados: destacados,
                ofertas:ofertas
            })
        })
    },
    email: function (req, res) {
        res.render('email', {
            title: 'Dejanos tu email!',
            css: 'enviar-email.css',
        })
    },
    nosotros: function (req, res) {
        res.render('nosotros', {
            title: 'La empresa',
            css: 'enviar-email.css',
        })
    }
}