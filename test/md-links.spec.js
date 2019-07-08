const mdLinks = require('../md-links');

describe('readUserFile', () => {

  it('si ha ingresado el archivo prueba.md deberia retornar un arreglo y un objeto', async() => {
   await expect(mdLinks.readUserFile('./prueba.md')).resolves.toEqual([{"file": "./prueba.md", "href": "https://github.com/workshopper/learnyounode", "text": "learnyounode"}]);
  });
  it('Debería retornar error, al leer un archivo que no existe ', async()  => {
    await expect(mdLinks.readUserFile('./hola.txt')).rejects.toThrow("ENOENT: no such file or directory, open 'C:\\Users\\Olidata\\Desktop\\SCL009-md-links\\hola.txt");
  });
});

test('readUserDirectory',async() => {
 await it('si ha ingresado un directorio deberia retornar un arreglo y un objeto', () => {
  expect(mdLinks.readUserDirectory('../SCL009-md-links/test')).resolves.toEqual([{"file": "./prueba.md", "href": "https://github.com/workshopper/learnyounode", "text": "learnyounode"}]);
  });
});
test('validateUrl',async() => {
  await it('si ha ingresado un directorio deberia retornar un arreglo y un objeto', () => {
   expect(mdLinks.validateUrl('../SCL009-md-links/test')).resolves.toEqual([{"file": "./prueba.md", "href": "https://github.com/workshopper/learnyounode", "text": "learnyounode"}]);
   });
 });
 test('readStats',async() => {
  await it('si ha ingresado un directorio deberia retornar un arreglo y un objeto', () => {
   expect(mdLinks.readStats('../SCL009-md-links/test')).resolves.toEqual([{"file": "./prueba.md", "href": "https://github.com/workshopper/learnyounode", "text": "learnyounode"}]);
   });
 });
 describe('readStats', async() => {

  await it('si ha ingresado el archivo prueba.md deberia retornar un arreglo y un objeto', () => {
    expect(mdLinks.readStats('./prueba.md')).resolves.toEqual([{"file": "./prueba.md", "href": "https://github.com/workshopper/learnyounode", "text": "learnyounode"}]);
  });
 })


 