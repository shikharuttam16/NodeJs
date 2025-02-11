const express = require('express')
const app = express()

//Root route
app.get('/',(req,res)=>{
    res.send("Welcome to our home page")
})

//Get all products
app.get('/products',(req,res)=>{
    const products = [
        {
            id:1,
            label:'Product 1'
        },
        {
            id:1,
            label:'Product 2'
        },
        {
            id:1,
            label:'Product 3'
        }
    ]
    res.json(products)
})

//Get a single product
app.get('/product/:productId',(req,res)=>{
    const productId = parseInt(req.params.productId)
    console.log(productId);
    
    const products = [
        {
            id:1,
            label:'Product 1'
        },
        {
            id:2,
            label:'Product 2'
        },
        {
            id:3,
            label:'Product 3'
        }
    ]
    const getSingleProduct = products.find((products)=>products.id == productId)
    if(getSingleProduct){
        res.json(getSingleProduct)
    }else{
        res.status(404).json({
            msg:"Error not found"
        })
    }
    
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server is now running ar port ${PORT}`)
})