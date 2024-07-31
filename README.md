#INSTAGRAM CLONE

#Installation

Clone the repo
in the terminal-
git clone https://github.com/Shubh1127/Instagram_EJS.git 

// Install the dependencies:
npm install

//OR YOU CAN DO MANUALLY--
// just go to the terminal and run these command or copy it
1.Express
npm i express

to use it-
//don't paste these to the terminal
const express = require('express')
const app = express()
app.get('/', function (req, res) {
res.send('Hello World')
})

app.listen(3000)

2.EJS
npm i ejs
// Some basic features
1.Control flow with <% %>
2.Escaped output with <%= %> (escape function configurable)
3.Unescaped raw output with <%- %>
4.Newline-trim mode ('newline slurping') with -%> ending tag
5.Whitespace-trim mode (slurp all whitespace) for control flow with <%_ _%>


3.nodemon

npm i nodemon

Usage-
nodemon [your node app]