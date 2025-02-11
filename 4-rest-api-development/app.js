const express = require('express')
const app = express()

//Middle ware
app.use(express.json()) //It parses json

let books = [
    {
        id:1,
        title:'Book 1'
    },
    {
        id:2,
        title:'Book 2'
    },
]

//intro route
app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Welcome to book store api"
    })
})

//get all books
app.get('/books',(req,res)=>{
    res.status(200).json(books)
})

//get single book
app.get('/book/:id',(req,res)=>{
    const id = req.params.id
    const book = books.find((book)=>book.id == id)
    if(!book) res.status(404).json({message:'No book found please try with differnt id'})
    res.status(200).json({
        book
    })
})

//add a new book
app.post('/add',(req,res)=>{
    const title = req.body.title
    const id = books[books.length-1].id+1
    const bookObj = {
        id,
        title
    }
    books.push(bookObj)
    res.json({
        message:"Data Added",
        data:bookObj
    })
})

//update a book
app.put('/update',(req,res)=>{
    const id = req.body.id
    const title = req.body.title
    const updatedBook = books.find((res)=>res.id == id)
    if(updatedBook){
        console.log("Updated think",updatedBook);
        updatedBook.title = title
        console.log("After Updated think",books);

        res.status(200).json({
            message:`Book update with id ${id}`,
            data:updatedBook
        })
    }else{
        res.status(404).json({
            error:"Book not found"
        })
    }
})

//Delete a book
app.delete('/delete',(req,res)=>{
    const id = req.body.id
    console.log("Delete book id ",id);
    const bookToBeDeleted = books.findIndex((res)=>res.id == id)
    if(bookToBeDeleted>-1 && bookToBeDeleted<=books.length){
        books.splice(bookToBeDeleted,1)
    }
    res.status(200).json({
        message:"Book deleted",
        data:books
    })
    
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})