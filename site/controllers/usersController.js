
module.exports = {
    login: function (req, res) {
        res.render('login', {
            title: 'Ingresa tus datos',
            css: 'listado.css',
        })
    },
    registro: function (req, res) {
        res.render('registro', {
            title: 'Registrate',
            css: 'registro.css',
        })
    },
    restablecer: function (req, res) {
        res.render('restablecer', {
            title: 'Reestablecer contraseña',
            css: '',
        })
    },
    

}


