// auth functions
const showLogin=(req,res)=>{
    res.render("login");
}

const loginUser = (req, res) => {
    console.log(req)
}

const showRegister=(req,res)=>{
    res.render("register");
}

const registerUser = async (req, res) => {
    console.log(req)
}

const showHeader=(req,res)=>{
    res.render("header");
}

module.exports={
    showLogin,
    loginUser,
    showRegister,
    registerUser,
    showHeader,
}