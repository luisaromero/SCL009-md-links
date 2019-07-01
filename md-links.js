"use strict"
const fs = require('fs');
const marked = require('marked');
const FileHound = require('filehound');
const path= require('path')
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
getValidate(links)
resolve(links);
}
  })
})
};

 async function readUserDirectory(path){
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

function getValidate(url){
  url.forEach(function (element) {
              fetch(element.href).then((res)=>{
                  console.log((element.href),(res.statusText),(res.status));
              })
              .catch (error =>{
                  console.log(error.message)
              })
           })
          }
           module.exports.getValidate=getValidate
           module.exports.readUserFile=readUserFile
           module.exports.readUserDirectory=readUserDirectory
//  function linkValidate(links){
//   let status =[];
//   let urls =[];
//  links.forEach(element => {
//       fetch(element.href)
//      .then (res =>{
//          //console.log(res.url, res.status, res.statusText);
//          status= res.status;
//          urls = res.url;
//          console.log('Estos links están validados correctamente'),( urls, status);

//      })

//      .catch(err=>{
//        console.log('links con errores'),chalk.red.bold(err.message, err.code);

//      })

//    })
//   }




// var fetchUrl = require("fetch").fetchUrl;



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
