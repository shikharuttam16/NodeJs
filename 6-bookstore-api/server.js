require('dotenv').config() // dotenv package is use to get variables from env
const express = require('express')
const connectToDB = require('./database/db')
const bookRoutes = require('./routes/book.routes')

const app = express()
const PORT = process.env.PORT || 3000

// connect to databse
connectToDB()

//routes
app.use('/api/books',bookRoutes)



//listen
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})