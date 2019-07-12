
let user = process.argv[2]
const fs = require('fs');
const marked = require('marked');
const FileHound = require('filehound');



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
    }
      })
    })
    };
function readUserDirectory(command){
    FileHound.create()
    .paths(command)
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

   readUserDirectory(user)
   module.exports.readUserDirectory=readUserDirectory