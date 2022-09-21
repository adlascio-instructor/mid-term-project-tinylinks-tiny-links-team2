const express = require('express');

const{showNewUrls,
      showSingleUrl,
      showUrls}=require("../controllers/urlsController");

const router=express.Router();

router.get('/newurl',showNewUrls);

router.get('/singleurl',showSingleUrl);

// http://localhost:3000/urls/
router.get('/urls',showUrls);

router.post("/urls", showNewUrls);

router.put("/urls", showUrls);

router.delete("/urls", showUrls);

module.exports=router



