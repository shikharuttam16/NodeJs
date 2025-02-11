const express = require('express')
const app = express()

const requestTimeStampLogger = (req,res,next)=>{
    const timestamp = new Date().toISOString()
    console.log(`${timestamp} from ${req.method} to ${req.url}`)
    next()
}

app.use(requestTimeStampLogger)

app.get("/",(req,res)=>{
    res.send('Home Page')
})

app.get("/about",(req,res)=>{
    res.send('About Page')
})

app.listen(8080,()=>{
    console.log(`Running on PORT : 8080`)
})