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
            css: '',
        })
    }
}