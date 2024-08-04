
const session = require("express-session");
const express=require("express");
const app=express();
const path=require("path");

let port=8080;

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));

app.listen(port,()=>{
    console.log(`port is listening ${port}`);
})
let users=[
    {
        username:"shubhamm_1223",
        bio:"shubham",
        followers:50,
        following:90,
        posts:0,
        followed_by:"harsh,yash"
    },
    {
        username:"dushyant_vashisht",
        bio:"Dushyant",
        followers:80,
        following:110,
        posts:0,
        followed_by:"harsh,shubham"
    },
    {
        username:"harsh_9560",
        bio:"harsh",
        followers:10,
        following:30,
        posts:0,
        followed_by:"shubham,dushyant"
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

app.get("/profile",(req,res)=>{
    if (req.session.username) {
        let username = req.session.username.trim().toLowerCase();
        let user = users.find(u => username === u.username.toLowerCase().trim());
        if (user) {
            res.render("profile.ejs", { user });
        } else {
            res.status(404).send("User not found");
        }
    } else {
        res.redirect("/");
    }
})
app.post("/home",(req,res)=>{
    try{
    let { username, password } = req.body;
    username = username.trim().toLowerCase();
    console.log("Received username:", username);

    let user = users.find(u => username === u.username.toLowerCase().trim());
    console.log("Found user:", user);

    if (user) {
        req.session.username = user.username;
    } else {
        res.status(404).send("User not found");
    }
    res.render("home.ejs")
    }
    catch{
        res.send("user not found")
    }
})
app.get("/home",(req,res)=>{
    res.render("home.ejs")
})

app.post("/search",(req,res)=>{
    res.render("search.ejs");
})
app.get("/search",(req,res)=>{
    res.render("search.ejs");
})