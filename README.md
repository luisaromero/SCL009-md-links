# md links-luisar 💻




# Comenzando 🚀

**¿De qué se trata y para qué sirve ?**   💡

Markdown es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional README.md).

Estos archivos Markdown normalmente contienen links (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una herramienta usando Node.js, que lea y analice archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas.


## Requisitos 📋

*Tener instalado nodeJs*


## Instalar 🔧

#### Para instalar la dependencia debes escribir en la terminal :


![install](https://img.fenixzone.net/i/6YNK4fP.png)


## ¿ Cómo usarlo ?🧐

 Ingresa en la terminal al comando md-link , seguido del archivo md (ejemplo README.md) para ver los links que posee el archivo especificado.

 
![archivo](https://img.fenixzone.net/i/p9TqYPe.png)



Ingresa en la terminal al comando md-link , seguido de un directorio (ejemplo ../SCL009-md-links) para ver los archivos md que posee el directorio especificadoy sus respectivos links .



![validate](https://img.fenixzone.net/i/4EZFsNf.png)

Ingresa en la terminal al comando md-link , seguido del archivo (ejemplo README.md) o directorio para ver los links que posee cada uno y ver su estatus , si esta activo será  Ok 200 , por el contrario retornará error 404.