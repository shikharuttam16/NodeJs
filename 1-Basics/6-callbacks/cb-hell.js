const fs = require('fs')

fs.readFile('input.txt','utf-8',(err,data)=>{
    if(err){
        throw err
    }
    console.log('Data from file',data);
    fs.writeFile('output.txt','This is output file',(err)=>{
        if(err){
            console.log('Error while writing file',err);
        }
        fs.readFile('output.txt','utf-8',(err,data)=>{
            if(err){
                console.log("Error while reading file",err)
            }
            console.log("Output file data",data)
        })
    })
})
