#!/usr/bin/env node

// module.exports = () => {
//   // ...
// };
//
const fs = require('fs');
const marked = require('marked');
const FileHound = require('filehound');
const mdLinks = require ('./md-links')

process.argv.forEach((option, index) => {//vemos posiciones de lo que escribe el ususrio
  console.log("index:", index, "valor:", option);
});

let path1 = process.argv[2];//ruta
let optionValidate = process.argv[3];//deberi ser validate
let optionStatus = process.argv[4];//deberia ser stats
 

// // fs.readFile('/etc/passwd', (err, data) => {
// //   if (err) throw err;
// //   console.log(data);
// //});
// // fs.readFile('./hola.md','utf8', (err, data)=>{
// //   if (err){
// //     throw err;
// //   }
// //   console.log(data);
// // });




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


//-------CREAMOS UNA CONSTANTE PARA QUE LEA UN ARCHIVO CON UN PATH (RUTA) ESPECIFICA , USAMOS MARKED Y FS---
const links = (path1)=>{
  fs.readFile(path1,'utf8', (err, data)=>{
if (err){
  throw err;
} 
let links = [];
const renderer = new marked.Renderer();
renderer.link = function (href, title, text){
  links.push({
    href:href,
    text:text,
    file:path1
  })
}
marked(data,{renderer:renderer});
console.log(links)
  })
}
console.log(links(path1))







