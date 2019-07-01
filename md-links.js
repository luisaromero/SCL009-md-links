"use strict"

const fs = require('fs');
const marked = require('marked');
const FileHound = require('filehound');
const fetch= require('node-fetch');


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
  if (process.argv[3]== "--validate"||process.argv[3] == "--v"){  
    validateUrl(links)
    }

}
  })
})
};

 function readUserDirectory(path){
  FileHound.create()
  .paths(path)
  .ext('md')
  .find()
 .then(files =>{
files.forEach(file =>
  readUserFile(file)
    .then(res => {
      console.log(res)
    })
  );
})
};

function validateUrl(url){
  url.forEach(function (element) {
              fetch(element.href).then((res)=>{
                  console.log((res.url) , (res.statusText),(res.status));
              })
              .catch (error =>{
                  console.log(error.message)
              })
           })
          }
           module.exports.validateUrl=validateUrl
           module.exports.readUserFile=readUserFile
           module.exports.readUserDirectory=readUserDirectory

