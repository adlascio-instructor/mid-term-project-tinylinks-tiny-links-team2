const express=require('express');

const{showNewUrls,
    showSingleUrl,
    showUrls}=require("../controllers/urlsController");

const router=express.Router();

router.get('/newurl',showNewUrls);

router.get('/singleurl',showSingleUrl);

router.get('/urls',showUrls);

module.exports=router