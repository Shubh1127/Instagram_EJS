const exp = require("constants");
const express=require("express");
const app=express();
const path=require("path");

let port=8080;

app.listen(port,()=>{
    console.log(`port is listening ${port}`);
})
let users=[
    {
        username:"shubhamm__1223",
        bio:"shubham",
        followers:50,
        following:90,
        Posts:0,
        Followed_by:"harsh,yash"
    },
    {
        username:"dushyant_vashisht",
        bio:"Dushyant",
        followers:80,
        following:110,
        Posts:0,
        Followed_by:"harsh,shubham"
    },
    {
        username:"harsh_9560",
        bio:"harsh",
        followers:10,
        following:30,
        Posts:0,
        Followed_by:"shubham,dushyant"
    }
]

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
    console.log(username)
    
    let user=users.find((u)=>username===u.username);
    if(user){
        let newContent=req.body.content;
        if(newContent){
            user.content=newContent;
        }
        res.render("profile.ejs",{user});
    }
    else{
        res.status(404).send("user not found")
    }
})
app.get("/home",(req,res)=>{
    res.render("home.ejs")
})