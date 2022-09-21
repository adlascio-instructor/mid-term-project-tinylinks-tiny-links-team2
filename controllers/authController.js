const users = require("../models/users.json");
const urls = require("../models/urls.json");
const {hashPassword}=require("../helpers/users");
const fs=require('fs');
const bcrypt=require('bcrypt');
const { 
    v1: uuidv1
  } = require('uuid');
// auth functions
const showLogin=(req,res)=>{
    res.render("login");
}

const showLanding=(req,res)=>{
    const email=req.session.email;
    if(!email)return res.redirect("/urls");
    const user=users[email];
    res.render("urls",{user,urls: Object.values(urls)});
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
    const receivedName=req.body.name
    const receivedEmail = req.body.email;
    const hashedPassword= await hashPassword(req.body.password);
    if(!(receivedEmail==="" ||hashedPassword===""||receivedName==="")){
        users[receivedEmail]={
            ...req.body,
            password:hashedPassword,
            id:uuidv1()
        };
        console.log("users",users)
        req.session.email = receivedEmail;
        updateUsers(users);
        res.redirect("/urls");
    }
    else{
        console.log("complete the form")
    }
    
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
    logoutUser,
    showLanding
}