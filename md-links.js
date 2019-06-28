var fetchUrl = require("fetch").fetchUrl;
const fs = require('fs');

let url = "https://www.google.com";
const getData = (url) => {
  return new Promise ((resolve, reject)=> {
    fetchUrl(url, (error, meta, body) =>{
          if (meta){
              resolve(meta.status);
          }else{
              reject (error);
          }
      })
  })
} 


getData(url)
.then(res => {
  console.log("El estado del sitio", url, "es:",res)
})
.catch(err => {
  console.log(err);
})