#!/usr/bin/env node


const fs = require('fs');
const marked = require('marked');
const FileHound = require('filehound');
const path= require('path')
// const mdLinks = require ('./md-links')



let pathUser= process.argv[2];//RUTA DEL ARCHIVO MD

let pathFile = path.resolve(pathUser)
// console.log('ruta del usuario:',pathFile)

function isFileOrDirectory(path) {
fs.lstat(path, (err, stats) => {
      if(err){
        console.log(err);
      } else if (stats.isDirectory()){
      console.log( 'soy directorio');
      directory(path);
      }else {
     console.log('soy file')
      }
  });
};









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


//---------- CREAMOS UNA CONSTANTE PARA LEER ARCHIVOS MD DE UN DIRECTORIO---------------------

function directory(path){
  FileHound.create()
  .paths(path)
  .ext('md')
  .find()
 .then(files =>{
files.forEach(file => console.log(links(file)));
})
};

isFileOrDirectory(pathFile)








