"use strict"

const fs = require('fs');
const marked = require('marked');
const FileHound = require('filehound');
const fetch= require('node-fetch');
const chalk = require('chalk')


function readUserFile(pathUser){
return new Promise((resolve,reject)=> {
  fs.readFile(pathUser , 'utf8' , (error,data)=> {
    if (error){
      reject(error)
    }else {
      let links = []
      const renderer = new marked.Renderer();
      renderer.link = function (href, title, text){
      links.push({
      href:href,
     text:text,
     file:pathUser
  })
}
marked(data,{renderer:renderer});
resolve(links);
validateUrl(links);
readStats(links);
    }
  })
})
};

 function readUserDirectory(path){
   console.log('entrando')
  FileHound.create()
  .paths(path)
  .ext('md')
  .find()
 .then(files =>{
files.forEach(file =>
  readUserFile(file)
    .then(res => {
      console.log(res)
    }).catch (error =>{
      console.log(error.message)
    })
  )
})
};

function validateUrl(url){
  if (process.argv[3]==='--validate'||process.argv[3]==='--v')
  url.forEach(function (element) {
              fetch(element.href).then((res)=>{
                  console.log(chalk.green(res.url) , chalk.cyan(res.statusText),chalk.yellow(res.status));
              })
              .catch (error =>{
                  console.log(error.message)
              })
           })
          }

  function readStats(url){
     console.log('stats')
    let total =[]
    let unique = 0
    let broken = 0
    url.forEach(function (element) {
      if (process.argv[4]==='--status'||process.argv[4]==='--s')
      fetch(element.href).then((res)=>{   
        if(res.ok)
        unique++
        console.log(`Links Unicos: ${chalk.white(unique)}`);
        if(element.status >= 400  ){
          broken++
          console.log(`Links Rotos: ${chalk.red(broken)}`)
         }
      })
      .catch (error =>{
          console.log(error.message)
      })
   })
  }







           module.exports.validateUrl=validateUrl
           module.exports.readUserFile=readUserFile
           module.exports.readUserDirectory=readUserDirectory

