"use strict"
const fs = require('fs');
const marked = require('marked');
const FileHound = require('filehound');
const path= require('path')


function readUserFile(pathUser){
return new Promise((resolve,reject)=> {
  fs.readFile(pathUser , 'utf8' , (error,data)=> {
    if (error){
      reject(error);
    } else {
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
} 
  })
})
};


// function readUserFiles (pathUser){
//   fs.readFile(pathUser,'utf8', (err, data)=>{
// if (err){
// throw err;
// } 
// let links = [];
// const renderer = new marked.Renderer();
// renderer.link = function (href, title, text){
//   links.push({
//     href:href,
//     text:text,
//     file:pathUser
//   })
// }
// marked(data,{renderer:renderer});
// console.log(links)
//   })
// }


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
    .catch(err => {
      console.log(err);
    })
  );
})
};

 module.exports.readUserFile=readUserFile
 module.exports.readUserDirectory=readUserDirectory




// var fetchUrl = require("fetch").fetchUrl;
// const fs = require('fs');

// let url = "https://www.google.com";
// const getData = (url) => {
//   return new Promise ((resolve, reject)=> {
//     fetchUrl(url, (error, meta, body) =>{
//           if (meta){
//               resolve(meta.status);
//           }else{
//               reject (error);
//           }
//       })
//   })
// } 


// getData(url)
// .then(res => {
//   console.log("El estado del sitio", url, "es:",res)
// })
// .catch(err => {
//   console.log(err);
// })