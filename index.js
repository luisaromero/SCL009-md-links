#!/usr/bin/env node

const fs = require('fs');
const path= require('path')
const mdLinks = require ('./md-links')

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
      mdLinks.readUserDirectory(path);
      }else {
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



