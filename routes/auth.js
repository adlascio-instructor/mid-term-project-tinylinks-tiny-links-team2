const express=require('express');
const router=express.Router();
const {
    showLogin,
    showRegister,
    registerUser,
    loginUser,
    logoutUser
}=require("../controllers/authController")

router.get("/login",showLogin);
router.post("/register",registerUser);
router.get("/register",showRegister);
router.post("/login",loginUser);
router.post("/logout",logoutUser)


module.exports=router