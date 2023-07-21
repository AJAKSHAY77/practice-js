// const { log } = require("console")
const http = require("http")

const options = {
    hostname: "fakestoreapi.com", 
    path:"/products/1",
    method:"GET"
}

const apireq = http.request(options,(res)=>{
    res.on("data",(data)=>{
    console.log(data.toString());
    })

})

apireq.on("error",(e)=>{
    console.log("error is :",e);
})
apireq.end();
