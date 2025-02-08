const fs = require('fs')
function person(name, cb){
    console.log(`Hello name`)
    cb()
}

function address(){
    console.log("India")
}

fs.readFile('input.txt','utf-8',(err,res)=>{
    if(err) throw err
    console.log(res);
    
})

person("Shikhar Uttam",address)

module.exports = {
    fs
}