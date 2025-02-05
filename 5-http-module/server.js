const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req,'request');
    res.writeHead(200,{'content-type':'text/plain'})
    res.end("Hello nodejs from http module")
})

const port = 3000
server.listen(port,()=>{
    console.log("Server is listening on port ",port);
})