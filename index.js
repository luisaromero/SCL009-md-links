#!/usr/bin/env node

const fs = require('fs');
let path= require('path')
const mdLinks = require ('./md-links')
const fetch= require('node-fetch');

//RUTA DEL ARCHIVO MD
let pathUser= process.argv[2];
let pathValidate =process.argv[3];

let pathFile = path.resolve(pathUser)

// console.log('ruta del usuario:',pathFile)

function isFileOrDirectory(command) {
fs.lstat(command, (err, stats) => {
      if(err){
        console.log('Ingresa archivo o directorio valido');
      } else if (stats.isDirectory()){
      console.log( 'soy directorio');
      mdLinks.readUserDirectory(command)
    } else if (path.extname(pathUser) !== ".md") {
 console.log('No es un archivo extension md')
    } else if (pathValidate == "validate"){
      mdLinks.readUserFile(pathUser)
      console.log('jeje')
      }else{
     console.log('soy file')
     mdLinks.readUserFile(pathUser)
       .then(res=> {
         console.log(res)
       }).catch(err=> {
       console.log(err)
       })
     }
      })
    }
isFileOrDirectory(pathFile)





