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

let path = "/path/to/something";

fs.lstat(path, (err, stats) => {

    if(err)
        return console.log(err); //Handle error

    console.log(`Is file: ${stats.isFile()}`);
    console.log(`Is directory: ${stats.isDirectory()}`);
    console.log(`Is symbolic link: ${stats.isSymbolicLink()}`);
    console.log(`Is FIFO: ${stats.isFIFO()}`);
    console.log(`Is socket: ${stats.isSocket()}`);
    console.log(`Is character device: ${stats.isCharacterDevice()}`);
    console.log(`Is block device: ${stats.isBlockDevice()}`);
});