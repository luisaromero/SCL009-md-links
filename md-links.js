// lee los archivos md de un directorio
const FileHound = require('filehound');
let pathUser= process.argv[2];
const path= require('path')

const files = (pathUser) =>{
  FileHound.create()
  .paths(pathUser)
  .ext('md')
  .find()
 .then(files =>{
files.forEach(file =>console.log('Found file', file));
})
};
console.log(files(pathUser))
// ../SCL009-md-links'

// const fs = require("fs");

// let path = process.argv[2]

// fs.lstat(path, (err, stats) => {
// console.log('entrando')
//     if(err)
//         return console.log(err); //Handle error

//     console.log(`Is file: ${stats.isFile()}`);
//     console.log(`Is directory: ${stats.isDirectory()}`);
// });