const express=require('express');
const router=express.Router();
const {
    showLogin,
    showRegister,
    showHeader,
}=require("../controllers/authController")

router.get("/login",showLogin);

router.get("/register",showRegister);

router.get("/header",showHeader)

module.exports=router