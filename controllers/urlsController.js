const users=require('../models/users.json')

// urls functions
const showNewUrls=(req,res)=>{
    const email=req.session.email;
    if(!email)return res.redirect("/login");
    res.render("newUrl");
}

const showSingleUrl=(req,res)=>{
    const email=req.session.email;
    if(!email)return res.redirect("/login");
    res.render("singleUrl");
}

const showUrls=(req,res)=>{
    const email=req.session.email;
    if(!email)return res.redirect("/login");
    res.render("urls");
}

module.exports={
    showNewUrls,
    showSingleUrl,
    showUrls,
}