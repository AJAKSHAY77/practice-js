// console.log("start");


const myfile = require("fs")
// // console.log(myfile);

// myfile.readFile("index.txt",function(err,data){
//     if(err){
//         console.log("invalid input",err);
        
//     }else{
//         console.log(data.toString());
        
//     }
    
// })

// console.log("other_staff");

// sync wway
// console.log("start");
// const data = myfile.readFileSync("index.txt")
// console.log(data.toString());
// console.log("the end");

//  myfile.writeFile("index.txt","the data is ",function(err){
//         if(err){
//             console.log("invalid input");
            
//         }else{
//             console.log("success");
            
//         }
        
//     })


// myfile.appendFile("index.txt","the data is ",function(err){
//     if(err){
//         console.log("invalid input",err);
        
//     }else{
//         console.log("success");
        
//     }
    
// })


myfile.unlink("index.txt",function(err){
    if(err){
        console.log("invalid input",err);
        
    }else{
        console.log("success");
        
    }
    
})

