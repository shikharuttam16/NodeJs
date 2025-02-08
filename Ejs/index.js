const express = require('express')
const path = require('path')

const app = express()

//Set the view engine as ejs
app.set('view engine','ejs')

//Set the directoy for the views
app.set('views',path.resolve(__dirname,'views'))

const products = [
    {
        id:1,
        title:'Product 1'
    },
    {
        id:2,
        title:'Product 2'
    }, {
        id:3,
        title:'Product 3'
    }, {
        id:4,
        title:'Product 4'
    },
]

app.get('/',(req,res)=>{
    res.render('home',{title:'Home',products:products})
})

app.get('/about',(req,res)=>{
    res.render('about',{title:'About Page'})
})

const PORT = 8080

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`)
})
