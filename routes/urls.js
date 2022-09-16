const express=require('express');
const{showNewUrls,showSingleUrl,showUrls}=require("../controllers/urlsController");
const router=express.Router();

router.get("/newUrl",showNewUrls);

router.get("/singleUrl",showSingleUrl);

router.get("/urls",showUrls);

module.exports=router