// auth functions
const showLogin=(req,res)=>{
    res.render("login");
}

const showRegister=(req,res)=>{
    res.render("register");
}

const showHeader=(req,res)=>{
    res.render("header");
}

module.exports={
    showLogin,
    showRegister,
    showHeader
}