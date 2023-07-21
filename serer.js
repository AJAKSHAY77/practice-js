const http = require("http");

const port = 3022
const hostname = "localhost"

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader(`content_type`,`text/plain`)
//    res.end("node sever created by akshay jain")
// })
// server.listen(port,()=>{
//     console.log(`serving runing at ${hostname}:${port}`);
// })

const server = http.createServer((req,res)=>{
    res.statusCode = 500;
    res.setHeader(`content_type`,`application/json`)
   res.end(JSON.stringify({error:"server Error"}))
})
server.listen(port,()=>{
    console.log(`serving runing at ${hostname}:${port}`);
})

