const express = require('express')
const app = express()

//Application level setting
app.set("View Engine",'ejs')

//Routing 
app.get('/',(req,res)=>{
    res.json({
        message:'Data received',
    })
})

app.post('/api/data',(req,res)=>{
    res.json({
        message:'Data received',
        data:req.body
    })
})

//To set middle ware
app.use((err,req,res,next)=>{
    console.log();
    res.status(500).send("Someting went wrong")
})