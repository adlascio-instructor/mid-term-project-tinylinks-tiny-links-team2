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
    const user={email:false,name:""}
    res.render("login",{userData:user});

}

const showLanding=(req,res)=>{
    const userData=req.session
    const email=req.session.email;
    if(!email)return res.redirect("/login");
    // const user=users[email];
    res.render("urls",{userData:userData,urls: Object.values(urls)});
}

const loginUser =async(req, res) => {
    const receivedEmail=req.body.email;
    const receivedPassword=req.body.password;
    const user = users[receivedEmail];
    console.log("----loginuser",user)
    let isMatch;
    if(user){
        isMatch=await bcrypt.compare(receivedPassword,user.password);
        console.log("isMAtch",isMatch)
    }
    if (!user || !isMatch) return res.send("invalid email or password");
    if(isMatch){
        req.session.email=user.email;
        req.session.id=user.id;
        req.session.name=user.name;
        return res.redirect('/urls')
    }
}

const showRegister=(req,res)=>{
    const user={email:false,name:""}
    res.render("register",{userData:user});
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
            id:uuidv1(),
        };
        const user=users[receivedEmail];
        req.session.email = receivedEmail;
        req.session.id=user.id;
        req.session.name=receivedName
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
    showLanding,
}