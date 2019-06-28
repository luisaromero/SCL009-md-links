#!/usr/bin/env node

const fs = require('fs');
const marked = require('marked');
const FileHound = require('filehound');
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
     mdLinks.readUserFiles(pathUser)
      }
  });
};

//-------CREAMOS UNA CONSTANTE PARA QUE LEA UN ARCHIVO CON UN PATH (RUTA) ESPECIFICA , USAMOS MARKED Y FS---



//---------- CREAMOS UNA CONSTANTE PARA LEER ARCHIVOS MD DE UN DIRECTORIO---------------------



isFileOrDirectory(pathFile)



