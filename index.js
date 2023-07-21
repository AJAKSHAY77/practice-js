const path = require("path");
const pathaj = require("path")

// console.log(pathaj.sep);

// console.log(process.env.PATH);

// console.log(pathaj.delimiter);

currentfilepath = __filename
console.log(`dir name = ${__dirname}`);
console.log(`the path is = ${currentfilepath}`);

const basename = path.basename(currentfilepath)
const extension = path.extname(currentfilepath)
const withextname = path.basename(currentfilepath,".js")

// if dir and base alg alg hai 
const dir_basename = path.format({
    dir :"d:\path module p",
    base :"index.js"
})

//aboslute path which start from roots 
const aboslute = path.isAbsolute(currentfilepath)
const aboslute2 = path.isAbsolute(".\index.js")

// add all files from different places
const mixing = path.join("\home","js","dis","index.js")

// to break path
console.log(path.parse(currentfilepath));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
console.log(`the base name is ${basename}`);
console.log(`the ext name is ${extension}`);
console.log(`the withoutext name is ${withextname}`);
console.log(`dir name + basename =  ${dir_basename}`);
console.log(aboslute);
console.log(aboslute2);
console.log(mixing);

console.log(path.resolve(currentfilepath));
console.log(__filename);
// normalizing path 
console.log(path.normalize("d//home//aout/contact//file"));


