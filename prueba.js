let promesa=new Promise((resolve,reject)=>{
 resolve('exito al procesar')
});
promesa.then((resultado)=>{
 console.log(resultado)
});