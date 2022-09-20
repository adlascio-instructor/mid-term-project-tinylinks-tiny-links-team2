const users = require("../models/users.json");
const {hashPassword}=require("../helpers/users");
const fs=require('fs');
const bcrypt=require('bcrypt')
// auth functions
const showLogin=(req,res)=>{
    res.render("login");
}

const loginUser =async(req, res) => {
    const receivedEmail=req.body.email;
    const receivedPassword=req.body.password;
    const user = users[receivedEmail];
    console.log(user)
    let isMatch;
    if(user){
        isMatch=await bcrypt.compare(receivedPassword,user.password);
        console.log("isMAtch",isMatch)
    }
    if (!user || !isMatch) return res.send("invalid email or password");
    if(isMatch){
        req.session.email=user.email;
        return res.redirect('/urls')
    }
}

const showRegister=(req,res)=>{
    res.render("register");
}

const updateUsers = (updatedUsers) => {
    fs.writeFile("./models/users.json", JSON.stringify(updatedUsers) ,function(err,data){
        if (err) {
            return console.log(err);
          }
    })
  };

const registerUser = async(req, res) => {
    const receivedEmail = req.body.email;
    const hashedPassword= await hashPassword(req.body.password);
    users[receivedEmail]={
        ...req.body,
        password:hashedPassword
    };
    console.log("users",users)
    req.session.email = receivedEmail;
    updateUsers(users);
    res.redirect("/urls");
}

const logoutUser=(req,res)=>{
    req.session=null;
    res.redirect("/login")
}

module.exports={
    showLogin,
    loginUser,
    showRegister,
    registerUser,
    logoutUser
}