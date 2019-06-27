#!/usr/bin/env node


const fs = require('fs');
const marked = require('marked');
const FileHound = require('filehound');
const path= require('path')
// const mdLinks = require ('./md-links')



let pathUser= process.argv[2];//RUTA DEL ARCHIVO MD

let pathFile = path.resolve(pathUser)
// console.log('ruta del usuario:',pathFile)

function directory(path) {
fs.lstat(path, (err, stats) => {
      if(err)
          return console.log(err);
    //   console.log(`Is file: ${stats.isFile()}`);
    //   console.log(`Is directory: ${stats.isDirectory()}`);
      if(stats.isFile()===true){
        links(pathUser)
      console.log('es file') }
      if (stats.isDirectory()===true){
     console.log('es directorio')}
  });
};
directory(pathUser)








//-------CREAMOS UNA CONSTANTE PARA QUE LEA UN ARCHIVO CON UN PATH (RUTA) ESPECIFICA , USAMOS MARKED Y FS---

function links (pathUser){
  fs.readFile(pathUser,'utf8', (err, data)=>{
if (err){

  throw err;
} 
let links = [];
const renderer = new marked.Renderer();
renderer.link = function (href, title, text){
  links.push({
    href:href,
    text:text,
    file:pathUser
  })
}
marked(data,{renderer:renderer});
console.log(links)
  })
}
console.log(links(pathUser))

//---------- CREAMOS UNA CONSTANTE PARA LEER ARCHIVOS MD DE UN DIRECTORIO---------------------

function files(pathUser){
  FileHound.create()
  .paths(pathUser)
  .ext('md')
  .find()
 .then(files =>{
files.forEach(file =>console.log('Found file', file));
})
};
console.log(files(pathUser))







