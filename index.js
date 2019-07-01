#!/usr/bin/env node

const fs = require('fs');
let path= require('path')
const mdLinks = require ('./md-links')

//RUTA DEL ARCHIVO MD
let pathUser= process.argv[2];
let pathValidate =process.argv[3];
let pathStats=process.argv[4];

let pathFile = path.resolve(pathUser)

function fileOrDirectory(command) {
fs.lstat(command, (err, stats) => {
      if(err){
        console.log('Ingresa archivo o directorio valido');
      } else if (stats.isDirectory()){
      console.log( 'Ingresaste un directorio');
      mdLinks.readUserDirectory(command)
} else if (path.extname(pathUser) !== ".md") {
 console.log('No es un archivo extension md')
    } else if (process.argv[4]== "--stats"||process.argv[4] == "--s"){ 
      console.log('stats') 
    }else if (pathValidate == "--validate"||pathValidate == "--v"){
      mdLinks.readUserFile(pathUser)
      }else{
     console.log('Ingresaste un archivo')
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





