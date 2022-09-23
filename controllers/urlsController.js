
const users=require('../models/users.json')
const urls = require("../models/urls.json");
const { 
    v1: uuidv1
  } = require('uuid');
const fs = require("fs");
const { response } = require("express");
const { json } = require("body-parser");
const Crypto = require("crypto");


// urls functions
const showNewUrls=(req,res)=>{
    const user=req.session
    const email=req.session.email;
    if(!email)return res.redirect("/login");
    res.render("newUrl",{userData:user});
}

const updateUrls = (updatedUrl) => {
    fs.writeFile("./models/urls.json", JSON.stringify(updatedUrl) ,function(err,data){
        if (err) {
            return console.log(err);
          }
    })
  };


  function randomString(size = 6){
   return Crypto
        .randomBytes(size)
        .toString('base64')
        .slice(0, size)
  }
  
const addNewUrl=(req,res)=>{
    console.log("new url request");
    const userPost=req.session.id;
    const newUrl = req.body.url;
    const token =  randomString();
    urls[token]={
        shortUrl: token,
        longUrl: newUrl,
        userId:userPost,
        urlId:uuidv1(),
    };
    
    updateUrls(urls);
    res.redirect("/urls");
 }


const showSingleUrl=(req,res)=>{

    const email=req.session.email;
    if(!email)return res.redirect("/login");
    res.render("singleUrl");
}

const showUrls=(req,res)=>{
    const email=req.session.email;
    const user=req.session
    console.log("showurls",user)
    if(!email){
        console.log("no email",user)
        return res.redirect("/login");
    }else{
        console.log("--user shurls", user)
        res.render("urls",{userData:user,urls: Object.values(urls)});
        // const id = +req.params.id;
        // const url = urls.find((url) => url.shortUrl === id);  

        // res.render("singleUrl", { url });
    }


}


const deleteSingleUrl=(req,res)=>{
    const id = +req.params.id;
    const url = urls.find((url) => url.shortUrl === id);
    res.render("singleUrl", { url });
}


module.exports={
    showNewUrls,
    showSingleUrl,
    showUrls,
    addNewUrl,
    deleteSingleUrl,
}




  