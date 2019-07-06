#!/usr/bin/env node

const fs = require('fs');
let path= require('path')
const mdLinks = require ('./md-links')
const chalk = require('chalk')

//RUTA DEL ARCHIVO MD
let pathUser= process.argv[2];
let pathValidate =process.argv[3];
let pathStats=process.argv[4];

let pathFile = path.resolve(pathUser)

function fileOrDirectory(command) {
fs.lstat(command, (err, stats) => {
      if(err){
        console.log(chalk.inverse.red('Ingresa archivo o directorio valido'));
      } else if (stats.isDirectory()){
      console.log( 'Ingresaste un directorio');
      mdLinks.readUserDirectory(pathUser)
} else if (path.extname(pathUser) !== ".md") {
 console.log(chalk.inverse.red('No es un archivo extension md.'))
      }else{
     console.log('Ingresaste un archivo.')
     mdLinks.readUserFile(pathUser)
       .then(res=> {
         console.log(res)
       }).catch(err=> {
       console.log(err)
       })
     }
      });
    }
    fileOrDirectory(pathFile)


// function mdLinkss(pathFile , options){
//   new Promise ((resolve, reject)=>{
//   fileOrDirectory(pathFile)
//   .then(res=>{
//    resolve(res)
//     .catch(err=>{
//       reject(err);
//     })
// }) }) }
// mdLinkss(pathFile)




