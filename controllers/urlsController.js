const urls = require("../models/urls.json");

// urls functions
const showNewUrls=(req,res)=>{
    res.render("newUrl");
}

const showSingleUrl=(req,res)=>{
    res.render("singleUrl");
}

const showUrls=(req,res)=>{
    console.log("urls", urls);
    console.log("urls array", values(urls));
    res.render("urls", {urls: Object.values(urls)});
}

module.exports={
    showNewUrls,
    showSingleUrl,
    showUrls,
}



  
  