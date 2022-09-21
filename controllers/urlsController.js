const urls = require("../models/urls.json");

const fs = require("fs");
const { response } = require("express");
const { json } = require("body-parser");
const { randomBytes } = require("crypto");

// urls functions

//    const getUrls = () =>{
//        const urldata= fs.readFileSync("../models/urls.json", "utf-8");
//        console.log("urls", urldata);
//        return json.PARSE(urldata).urls;
//    }


const showNewUrls=(req,res)=>{

    fs.readFile("../models/urls.json", "utf-8", (error, data) => {
        if (error) throw error;
        console.log("urls", data);
        response.json(data);
    })

    const newtoken = randomBytes(6);
    console.log(newtoken);

    res.render("newUrl");
}

const showSingleUrl=(req,res)=>{
    fs.readFile("../models/urls.json", "utf-8", (error, data) => {
        if (error) throw error;
        console.log("urls", data);
        response.json(data);
    })

    //    const urls = getUrls();

    res.render("singleUrl", {urlToken: "aA1234"});
}

const showUrls=(req,res)=>{
    fs.readFile("../models/urls.json", "utf-8", (error, data) => {
        if (error) throw error;
        console.log("urls", data);
        response.json(data);
    })

//    const urls = getUrls();

    res.render("urls", {urls: Object.values(urls)});
}



module.exports={
    showNewUrls,
    showSingleUrl,
    showUrls,
}




  