const mdLinks = require('../md-links');

describe('readUserFile', () => {

  it('si ha ingresado el archivo prueba.md deberia retornar un arreglo y un objeto', async() => {
   await expect(mdLinks.readUserFile('./prueba.md')).resolves.toEqual([{"file": "./prueba.md", "href": "https://github.com/workshopper/learnyounode", "text": "learnyounode"}]);
  });

});

describe('readUserDirectory', () => {

  it('si ha ingresado un directorio deberia retornar un arreglo y un objeto', async () => {
  await  expect(mdLinks.readUserDirectory('C:\Users\Olidata\Desktop\SCL009-md-links\test\prueba.md')).resolves.toEqual([{"file": "./prueba.md", "href": "https://github.com/workshopper/learnyounode", "text": "learnyounode"}]);
  });
});


 