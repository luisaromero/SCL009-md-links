#!/usr/bin/env node

const fs = require('fs');
const marked = require('marked');
const FileHound = require('filehound');
const path= require('path')
// const mdLinks = require ('./md-links')

//RUTA DEL ARCHIVO MD
let pathUser= process.argv[2];

let pathFile = path.resolve(pathUser)
// console.log('ruta del usuario:',pathFile)

function isFileOrDirectory(path) {
fs.lstat(path, (err, stats) => {
      if(err){
        console.log(err);
      } else if (stats.isDirectory()){
      console.log( 'soy directorio');
      readUserDirectory(path);
      }else {
     console.log('soy file')
     readUserFiles(pathUser)
      }
  });
};

//-------CREAMOS UNA CONSTANTE PARA QUE LEA UN ARCHIVO CON UN PATH (RUTA) ESPECIFICA , USAMOS MARKED Y FS---

function readUserFiles (pathUser){
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

function readUserDirectory(path){
  FileHound.create()
  .paths(path)
  .ext('md')
  .find()
 .then(files =>{
files.forEach(file => console.log(readUserFiles(file)));
})
};

isFileOrDirectory(pathFile)



