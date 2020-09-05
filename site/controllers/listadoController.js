module.exports = {
    listado: function(req,res){
        res.render('listado', { 
            title: 'Blastech',
            css:'listado.css',
        });
    }
}