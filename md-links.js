const links = (path) => {
    fs.readFile(path ,'utf8', (err,data)=>{
    if (err) {
  throw err
    }
    
  let links = []
  const renderer = new marked.Renderer();
  renderer.link = function (href,title,text) {
  links.push ({
    href:href,
    text:text,
    file:path,
  })
  }
  marked(data,{renderer:renderer})
  console.log(links)
 })
 }
  console.log(links('./prueba.md'))
  