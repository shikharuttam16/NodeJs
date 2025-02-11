const express = require('express')
const app = express()

const myFirstMiddleware = (req,res,next) => {
    console.log("This middleware will run on every request");
    next()
}

app.use(myFirstMiddleware) // It will run on every request 

app.get("/",(req,res)=>{
    res.send('Home Page')
})

app.get("/about",(req,res)=>{
    res.send('About Page')
})

app.listen(8080,()=>{
    console.log(`Running on PORT : 8080}`)
})