#!/usr/bin/env node


const fs = require('fs');
const marked = require('marked');
const FileHound = require('filehound');
const path= require('path')
// const mdLinks = require ('./md-links')


let pathUser= process.argv[2];//RUTA DEL ARCHIVO MD

let pathFile = path.resolve(pathUser)
console.log('ruta del usuario:',pathFile)

function directory(pathFile) {
fs.lstat(pathFile, (err, stats) => {
      if(err)
          return console.log(err)
      console.log(`Is file: ${stats.isFile()}`);
      console.log(`Is directory: ${stats.isDirectory()}`);
  });
}console.log(directory())








//-------CREAMOS UNA CONSTANTE PARA QUE LEA UN ARCHIVO CON UN PATH (RUTA) ESPECIFICA , USAMOS MARKED Y FS---

// const links = (path1)=>{
//   fs.readFile(path1,'utf8', (err, data)=>{
// if (err){
//   console.log('error al igresar ruta')
//   throw err;
// } 
// let links = [];
// const renderer = new marked.Renderer();
// renderer.link = function (href, title, text){
//   links.push({
//     href:href,
//     text:text,
//     file:path1
//   })
// }
// marked(data,{renderer:renderer});
// console.log(links)
//   })
// }
// console.log(links(path1))







