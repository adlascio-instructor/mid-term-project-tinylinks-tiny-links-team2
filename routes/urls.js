const express = require('express');

const{showNewUrls,
      showSingleUrl,
      showUrls,
      addNewUrl,
      deleteSingleUrl,
      editSingleUrl
     }=require("../controllers/urlsController");

const router=express.Router();


router.get('/urls',showUrls);  // http://localhost:3000/urls/

router.get('/newurl',showNewUrls);

router.get('/singleurl/:id',showSingleUrl);

router.post("/newurl", addNewUrl);

router.post("/singleurl/:id/edit", editSingleUrl);

router.post("/singleurl/:id/delete", deleteSingleUrl);

router.put("/singleurl/:id", editSingleUrl);

module.exports=router



