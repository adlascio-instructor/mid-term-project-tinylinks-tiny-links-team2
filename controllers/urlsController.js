// urls functions
const showNewUrls=(req,res)=>{
    res.render("newUrl");
}

const showSingleUrl=(req,res)=>{
    res.render("singleUrl");
}

const showUrls=(req,res)=>{
    res.render("urls");
}

module.exports={
    showNewUrls,
    showSingleUrl,
    showUrls,
}