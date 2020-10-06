module.exports = function(req,res,next){
    if(req.cookies.user){
        req.session.user = req.cookies.user;
        res.locals.user = req.session.user  
        next()
    }else{
        next()
    }
}