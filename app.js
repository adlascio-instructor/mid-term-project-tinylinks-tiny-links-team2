const express=require('express');
const fs=require('fs');
const app=express();
const cookieSession=require('cookie-session');
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const authRouter=require("./routes/auth");
const urlsRouter=require('./routes/urls')

app.set('view engine','ejs')

app.get("/auth",authRouter);
app.get("/url",urlsRouter);

app.listen(3000,()=>console.log('runnning 3000'))