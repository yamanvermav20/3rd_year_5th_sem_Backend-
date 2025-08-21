function m1(req, res, next){
    console.log("running middleware 1...");
    req.user = {
        id : 1,
        username : "Yaman"
    }
    next()
}
function m2(req, res, next){
    console.log("running middleware 2");
    console.log(req.user);
    req.isAdmin = true;
    next()
}
function checkAdmin(req, res, next){
    console.log("running checkAdin middleware")
    let {name} = req.query;
    if(name == "Yaman"){
        req.isAdmin = true;
        return next();
    }
    res.json({
        success: true,
        message: "You are not Admin"
    })
}
function isLogin(req, res, next){
    console.log("running middleware isLogin");
    next()
}
module.exports.m1 = m1;
module.exports.m2 = m2
module.exports.checkAdmin = checkAdmin;
module.exports.isLogin = isLogin;