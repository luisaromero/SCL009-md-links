// // lee los archivos md de un directorio
// const files = (path) =>{
//   FileHound.create()
//   .paths(path)
//   .ext('md')
//   .find()
//  .then(files =>{
// files.forEach(file =>console.log('Found file', file));
// })
// };
// console.log(files('../SCL009-md-links'))

//lee archivos por el momento no lo cocuparemos por ser poco especifico
// const links = (path)=>{
//   fs.readdir(path,'utf8', (err, data)=>{
// if (err){
//   throw err;
// } 
// console.log(data)
//   })
// }
// console.log(links('../SCL009-md-links'))


const fs = require("fs");

let path = process.argv[2]

fs.lstat(path, (err, stats) => {
console.log('entrando')
    if(err)
        return console.log(err); //Handle error

    console.log(`Is file: ${stats.isFile()}`);
    console.log(`Is directory: ${stats.isDirectory()}`);
});