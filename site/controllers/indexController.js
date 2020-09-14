const path = require('path');
const dbProducts = require(path.join(__dirname, '..', 'data', 'dbProducts'));

module.exports = {
    home: function(req,res){
        res.render('index', { 
            title: 'Blastech',
            css:'index.css',
        })
        
    },
    
    email: function (req, res) {
        res.render('email', {
            title: 'Dejanos tu email!',
            css: 'enviar-email.css',
        })
    }
}