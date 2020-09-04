module.exports = {
    detail: function(req,res){
        res.render('detail', { 
            title: 'Blastech',
            css:'detail.css',
        });
    }
}