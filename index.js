#!/usr/bin/env node

const fs = require('fs');
let path= require('path')
const mdLinks = require ('./md-links')

//RUTA DEL ARCHIVO MD
let pathUser= process.argv[2];
let pathValidate =process.argv[3];

let pathFile = path.resolve(pathUser)

// console.log('ruta del usuario:',pathFile)

function fileOrDirectory(command) {
fs.lstat(command, (err, stats) => {
      if(err){
        console.log('Ingresa archivo o directorio valido');
      } else if (stats.isDirectory()){
      console.log( 'soy un directorio');
      mdLinks.readUserDirectory(command)
} else if (path.extname(pathUser) !== ".md") {
 console.log('No es un archivo extension md')
    } else if (pathValidate == "--validate"||pathValidate == "--v"){
      mdLinks.readUserFile(pathUser)
      console.log('jeje')
      }else{
     console.log('soy un archivo')
     mdLinks.readUserFile(pathUser)
       .then(res=> {
         console.log(res)
       }).catch(err=> {
       console.log(err)
       })
     }
      })
    }
fileOrDirectory(pathFile)





