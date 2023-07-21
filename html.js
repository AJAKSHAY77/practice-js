const http = require("http")

const server = http.createServer((req,res)=>{
   if(req.url == "/"){
    res.write("jai hooo")

   }
   res.end
})

server.listen(5005)
console.log("done");


