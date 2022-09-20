const users = require("../models/users.json");
const {hashPassword}=require("../helpers/users");
const fs=require('fs');
const bcrypt=require('bcrypt')
// auth functions
const showLogin=(req,res)=>{
    res.render("login");
}

const loginUser = (req, res) => {
    const receivedEmail=req.body.email;
    const receivedPassword=req.body.password;
    const user = users[receivedEmail];

    let isMatch;
    if(user){}
}

const showRegister=(req,res)=>{
    res.render("register");
}

const updateUsers = (updatedUsers) => {
    fs.writeFile("./models/users.json", JSON.stringify({users:updatedUsers}) ,function(err,data){
        if (err) {
            return console.log(err);
          }
    })
  };

const registerUser = async(req, res) => {
    const receivedName = req.body.name;
    const hashedPassword= await hashPassword(req.body.password);
    users[receivedName]={
        ...req.body,
        password:hashedPassword
    };
    console.log("users",users)
    req.session.username = receivedName;
    updateUsers(users);
    res.redirect("/profile");
}

 const server = http.createServer((request, response) => {
     console.log("url", request.url); {
     if (request.url ===  "readFile") {
         readFile("./views/partials/header.ejs", "utf8", (error, data) => {
             if (error) {
                 console.log("error on read file", error);
             } else {
                 console.log("content file", data);
                 response.writeHead(200, { "content-type": "text/html" });
                 response.write(data);
                 response.end();
             }
         })
         }
     }
 })

module.exports={
    showLogin,
    loginUser,
    showRegister,
    registerUser,
}