const express = require('express');

const{showNewUrls,
      showSingleUrl,
      showUrls,
      addNewUrl
     }=require("../controllers/urlsController");

const router=express.Router();


router.get('/urls',showUrls);  // http://localhost:3000/urls/

router.get('/newurl',showNewUrls);

router.get('/singleurl/:id',showSingleUrl);

router.post("/newurl", addNewUrl);

router.put("/singleurl/:id", showSingleUrl);

router.delete("/singleurl/:id/delete", showUrls);

module.exports=router



