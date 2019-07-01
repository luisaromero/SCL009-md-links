// let promesa=new Promise((resolve,reject)=>{
//  resolve('exito al procesar')
// });
// promesa.then((resultado)=>{
//  console.log(resultado)
// });

// 'use strict'
// module.exports = {

//   validateAndStats: function() {
//     let total = 3
//     let unique = 2
//     let broken = 1

//     const validateAndStats = {
//       total: total,
//       unique: unique,
//       broken: broken,
//     };
//     return validateAndStats;
//   },

// };

// // mdLinks module requirement
// const mdLinks = require("./md-links");
// // File System requirement
// const fs = require('fs');
// // Markdown Link Extractor requirement
// const markdownLinkExtractor = require('markdown-link-extractor');
// // Options
// var validate = false;
// var stats = false;

// /*
// process.argv is an array containing the command line arguments.
// The first element will be 'node', the second element will be
// the name of the JavaScript file. The next elements will be
// any additional command line arguments.
// */
// process.argv.forEach((option, index, array) => {
//   console.log("index:", index, "value:", option);
//   if(index > 1 && index < 5) {
//     if(option == "--validate" || option == "--v") {
//       validate = true;
//     } else if(option == "--stats" || option == "--s") {
//       stats = true;
//     } else {
//       console.log("Opción no válida:", option);
//     }
//   }
// });

// console.log("validate:", validate);
// console.log("stats:", stats);

// if(validate && stats) {
//   console.log("both");
// } else if(validate) {
//   console.log("only validate");
// } else if(stats) {
//   console.log("only stats");
// }

// // Read Markdown file function
// const readMarkdownFile = (callback) => {
//   fs.readFile("./prueba.md", 'utf-8', (error, content) => {

//     if(error) {
//       return callback(error)
//     }

//     // Since there's no error at this point, we return null instead
//     callback(null, content)

//   })
// }

// // Read markdown file function call
// readMarkdownFile((error, content) => {
//   console.log(content)
// });

// console.log(mdLinks.validateAndStats());

// const fetch = require('node-fetch')
//  let promesa = fetch('https://api.github.com/users/mitocode21');
//  promesa.then((res)=>{
//    return res.json();
//  }).then((json)=>{
//    console.log(json)
//  });

// var urlExists = require('url-exists');
 
// urlExists('https://www.google.com', function(err, exists) {
//   console.log(exists); // true
// });
 
// urlExists('https://www.facebook.com/JEJEXDJDSHHKDSAJDHH', function(err, exists) {
//   console.log(exists); // false
// });
const fetch = require('node-fetch');


async function getValidate(url){
  let url = "https://www.google.com";
  url.forEach(function (element) {
              fetch(element.link).then((res)=>{
                  console.log(chalk.blue(path.resolve(process.argv[2])), chalk.red(element.link), chalk.green(res.statusText), chalk.yellow(res.status), chalk.red(element.title));
              })
              .catch (error =>{
                  console.log(error.message)
              })
           })
} getValidate(url)