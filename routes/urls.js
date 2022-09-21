const express = require('express');

const{showNewUrls,
      showSingleUrl,
      showUrls,
      addNewUrl
     }=require("../controllers/urlsController");

const router=express.Router();


router.get('/urls',showUrls);  // http://localhost:3000/urls/

router.get('/newurl',showNewUrls);

router.get('/singleurl',showSingleUrl);

router.post("/newurl", addNewUrl);

router.put("/singleurl", showSingleUrl);

router.delete("/urls", showUrls);

module.exports=router



