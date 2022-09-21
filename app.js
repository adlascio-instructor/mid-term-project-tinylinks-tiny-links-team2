
const express=require('express');
const app=express();

const cookieSession=require('cookie-session');
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const authRouter=require("./routes/auth");
const urlsRouter=require("./routes/urls")

app.use(express.urlencoded({ extended: true }));

app.use(
    cookieSession({
      name: "session",
      keys: ["key1", "key2"],
    })
  );

app.set('view engine','ejs')
app.use("/",authRouter);
app.use("/",urlsRouter);

 
app.listen(3000,()=>console.log('runnning 3000'))
