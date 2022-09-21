
const users=require('../models/users.json')
const urls = require("../models/urls.json");

const fs = require("fs");
const { response } = require("express");
const { json } = require("body-parser");
const Crypto = require("crypto");

// urls functions

const showUrls=(req,res)=>{
    res.render("urls", {urls: Object.values(urls)});
}

const showNewUrls=(req,res)=>{
    const email=req.session.email;
    if(!email)return res.redirect("/login");
    res.render("newUrl");
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
    
    const newUrl = req.body.url;
    const token =  randomString();
    
    console.log(newUrl);
    console.log(token);

    urls[token]={
        shortUrl: token,
        longUrl: newUrl
    };

    console.log("urlList",urls)
    
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
    if(!email)return res.redirect("/login");
    res.render("urls");

    const id = +req.params.id;
    const url = urls.find((url) => url.shortUrl === id);  
    
    res.render("singleUrl", { url });
}


const deleteSingleUrl=(req,res)=>{
    //pesquisar como excluir
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




  