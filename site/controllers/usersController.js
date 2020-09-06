
module.exports = {
    login: function (req, res) {
        res.render('login', {
            title: 'Ingresa tus datos',
            css: 'login.css',
        })
    },
    registro: function (req, res) {
        res.render('registro', {
            title: 'Registrate',
            css: 'login.css',
        })
    },
    restablecer: function (req, res) {
        res.render('restablecer', {
            title: 'Reestablecer contraseña',
            css: '',
        })
    },
    

}


