const mongoose = require('mongoose')

const connectToDB = async () =>{
    try {
        await mongoose.connect('mongodb+srv://uttam16shikhar:@cluster0.o2uee.mongodb.net/')
        console.log('MongoDb is connected successfully')
    } catch (error) {
        console.log("Error : ",error)
        process.exit(1)
    }
}

module.exports = connectToDB