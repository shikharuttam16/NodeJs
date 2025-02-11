const { default: mongoose } = require('mongoose')
const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title : {
        type : String,
        requred : [true,'Book title is required'],
        trim : true,
        maxLength : [100,'Book title can not be more than 100 characters']
    },
    author : {
        type : String,
        required : [true, 'Author is required'],
        trim : true,
        maxLength : [100 , 'Author can not be more than 100 characters']
    },
    year : {
        type : Number,
        required : [true, 'Publication year is required'],
        min : [1000, 'Year must be atleast 1000' ],
        max : [new Date().getFullYear() , 'Year can not be in the future']
    },
    createdAt : {
        type : Date,
        default : Date.now 
    } 
})

module.exports = mongoose.model('Book',BookSchema)