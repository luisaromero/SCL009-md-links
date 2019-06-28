// lee los archivos md de un directorio
const FileHound = require('filehound');
let pathUser= process.argv[2];
const path= require('path')
const fs = require('fs');


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

function links (path){
  fs.readFile(path,'utf8', (err, data)=>{
if (err){

  throw err;
} 
let links = [];
const renderer = new marked.Renderer();
renderer.link = function (href, title, text){
  links.push({
    href:href,
    text:text,
    file:path
  })
}
marked(data,{renderer:renderer});
console.log(links)
  })
}
console.log(links(pathUser))

const files = (path) =>{
  FileHound.create()
  .paths(path)
  .ext('md')
  .find()
 .then(files =>{
  files.forEach(file => links(file));
})
};
console.log(files(path))
