//module.exports -> similar to  export 
//require ->  similar to import

const firstModule = require('./first-module')

console.log(firstModule.add(5,4))


try {
    console.log('Trying to divide by zero');
    let res = firstModule.divide(0,10)
    console.log("Result",res)
} catch (error) {
    console.log("Error",error.message); // If we access by .message it shows error
    
}

//module wrapper
// {
//     function(exports, require, module, __filename, __dirname){

//     }
// }