const express=require('express');
const router=express.Router();
const {
    showLogin,
    showRegister,
    showHeader,
    registerUser,
    loginUser
}=require("../controllers/authController")

router.get("/login",showLogin);
router.post("/register",registerUser);
router.get("/register",showRegister);
router.post("/login",loginUser)

module.exports=router