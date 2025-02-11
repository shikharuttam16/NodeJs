const mongoose = require('mongoose')
//Data in collection are known as documents

//Databse connection here connection string we get from mongodb and it will return the promise 
mongoose.connect('mongodb+srv://uttam16shikhar:guccinikepuma@cluster0.o2uee.mongodb.net/').then(()=>{
    console.log('Data base connected successfully')
}).catch((error)=>{
    console.log('Error',error)
})


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    isActive:Boolean,
    tags:[String],
    createdAt:{type:Date,default:Date.now}
});

//Create user model
const User = mongoose.model('User',userSchema) // First param in this
//  model funcition shows name by which collection is created 

async function runQueryExample(){
    try {
        // const newUser = User.create({
        //     name:"Manan punj",
        //     email:"mananpunj21@gmail.com",
        //     age:"16",
        //     isActive:false,
        //     tags:["Developer","Athlete"],
        // })

        //Another way to store data
        // const secondUser = new User({
        //     name:"Manan punj",
        //     email:"mananpunj21@gmail.com",
        //     age:"16",
        //     isActive:false,
        //     tags:["Developer","Athlete"],
        // })
        
        // secondUser.save()

        // const allUsers = await User.find({}) //Get all data

        // const getInActiveUsers = await User.find({
        //     isActive:false
        // })

        // const getFirstActiveUser = await User.findOne({ //Find one will return first active user
        //     isActive:true
        // })
        // console.log("All users",getInActiveUsers);
        // console.log("First active user",getFirstActiveUser);

        //Create new user
        // const newUser = await User.create({
        //     name:"Amit Pal",
        //     email:"amit.pal@grazitti.com",
        //     age:27,
        //     isActive:false,
        //     tags:["Developer","Designer"],
        // })
        // console.log("New Amit user");
        // const getLastCreatedUserByUserId = await User.findById(newUser._id) //Get user by id
        // console.log(getLastCreatedUserByUserId)

        //Selected info from user
        // const selectedFields = await User.find().select('name email -_id')
        // console.log("Selected fields",selectedFields);
        
        //Get limited data and skip certain
        // const selectedUsers = await User.find().limit(2).skip(2)
        // console.log("Selected users",selectedUsers);

        //Get sorted users
        // const sortedUsers = await User.find().sort({age:-1}) //-1 will sort in descending order
        // const sortedUsers = await User.find().sort({name:1}) //-1 will sort in ascending order by name
        // console.log(sortedUsers);

        //Count documents
        // const countDocuments = await User.countDocuments({isActive:false}) // It will count documents by isActive false
        // console.log(countDocuments);

        //Delete a user
        // const deletedUser = await User.findByIdAndDelete('67a865c2dcc85e5eee34590b')
        // console.log("Deleted user",deletedUser);
        
        //Update a user
        const updateUser = await User.findByIdAndUpdate("67a85d70e758d91d10466290",{
            $set:{name:"Manan Sharma punj"},$push:{tags:'updated val'}
        },{new:true}) // third param new will return new document back else it will return an old doc
        console.log("Updated user",updateUser);
        
        
    } catch (error) {
        console.log("Error ->",error);
    }finally{
        await mongoose.connection.close()
    }
}

runQueryExample()