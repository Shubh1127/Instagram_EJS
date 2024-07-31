const exp = require("constants");
const express=require("express");
const app=express();
const path=require("path");

let port=8080;

app.listen(port,()=>{
    console.log("port is listening");
})


app.use(express.urlencoded({extended:true}))


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

app.use(express.static(path.join(__dirname,"public")))
app.use(express.static('public'));


app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.post("/profile",(req,res)=>{
    let {username,password}=req.body;
    console.log(username,password);
    res.render("profile.ejs")
})
