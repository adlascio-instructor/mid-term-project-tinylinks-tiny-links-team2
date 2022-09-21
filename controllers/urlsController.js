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
    res.render("newUrl");
}

const updateUrls = (updatedUrl) => {
    fs.writeFile("./models/urls.json", JSON.stringify({urls:updatedUrl}) ,function(err,data){
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
    res.render("singleUrl", {urlToken: "aA1234"});
}


module.exports={
    showNewUrls,
    showSingleUrl,
    showUrls,
    addNewUrl,
}




  