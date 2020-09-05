module.exports = {
    cargar: function(req,res){
        res.render('carga-producto', { 
            title: 'Blastech',
            css:'estilosCarga.css',
        });
    }
}