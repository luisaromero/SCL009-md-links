// module.exports = () => {
//   // ...
// };
const fs = require('fs');
const marked = require('marked');
const FileHound = require('filehound');
 

// fs.readFile('/etc/passwd', (err, data) => {
//   if (err) throw err;
//   console.log(data);
//});
// fs.readFile('./hola.md','utf8', (err, data)=>{
//   if (err){
//     throw err;
//   }
//   console.log(data);
// });
// lee los archivos md de un directorio
let pathFile = process.argv[2]
console.log(pathFile)

const files = (path) =>{
  FileHound.create()
  .paths(path)
  .ext('md')
  .find()
 .then(files =>{
files.forEach(file =>console.log('Found file', file));
})
};
console.log(files('../SCL009-md-links'))

// const links = (path)=>{
//   fs.readdir(path,'utf8', (err, data)=>{
// if (err){
//   throw err;
// } 
// console.log(data)
//   })
// }
// console.log(links('../SCL009-md-links'))


// const links = (path)=>{
//   fs.readFile(path,'utf8', (err, data)=>{
// if (err){
//   throw err;
// } 
// let links = [];
// const renderer = new marked.Renderer();
// renderer.link = function (href, title, text){
//   links.push({
//     href:href,
//     text:text,
//     file:path
//   })
// }
// marked(data,{renderer:renderer});
// console.log(links)
//   })
// }
// console.log(links('./hola.md'))




