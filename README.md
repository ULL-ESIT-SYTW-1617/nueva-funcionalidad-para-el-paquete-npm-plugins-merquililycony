# Práctica 4 : Nueva funcionalidad para el Paquete NPM: plugins 

# Objetivo:
*El objetivo de esta práctica es extender el package NodeJS publicado en npm en una práctica anterior con una nueva*
*funcionalidad que permita que los usuarios con conocimientos de NodeJS puedan extender la conducta del ejecutable*
*para que este realice el despliegue en plataformas distintas de las ya consideradas.*


[Plugin: gitbook-start-iaas-ull-es-merquililycony](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-iaas-ull-es-merquililycony)
[Plugin: gitbook-start-heroku-merquililycony](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-heroku-merquililycony)

1- Descargamos el paquete inicial: **nueva-funcionalidad-para-el-paquete-npm-merquililycony**
    
```bash
$ npm install -g nueva-funcionalidad-para-el-paquete-npm-merquililycony
```

2- Creamos el libro :
    
```bash
$ gitbook-start -d <directorio> --autor <autor> --name <nombre_libro> --url <url_repo>
```

Opciones disponibles para la creación del libro:
    
    -d o --directorio <directorio en el que se desplegará el libro>
    
    --autor <autor del libro>
    
    --name  <nombre del libro>
    
    --url <url del repositorio en github>

    --help 
    
    --version

3- Nos colocamos en la carpeta que contiene el libro.

```bash
$ cd <directorio>
```

4- Instalamos las dependencias necesarias:
    
```bash
$ npm install 
```

5- Instalamos los plugins necesarios como dependendecias utilizando para ello la opción --save para iaas o heroku:
    
```bash
$ npm install --save gitbook-start-iaas-ull-es-merquililycony
```

```bash
$ npm install --save gitbook-start-heroku-merquililycony
```

6-Actualizar nuestro repositorio : **gulp push --mensaje <mensaje commit>**.


7- Ejecutamos --deploy especificando la máquina remota dónde se realizara el despliegue:
   
```bash
$ gitbook-start --deploy heroku [Opciones] (si despleguamos en heroku)

$ gitbook-start --deploy iaas-ull-es [Opciones] (si despleguamos en Iaas)
```

NOTA : Después de ejecutar lo anterior, en el gulpfile.js se generará de manera automatica una tarea llamada
"deploy-<máquina en la que realizar el despliegue>", esta tarea nos permite actualizar el contenido de la maquitna.


## Enlaces :

 **Enlace al campus virtual**

 * [Enunciado](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaplugin.html)

 **Repositorio GitHuB donde se realizó la práctica**

 * [Organización](https://github.com/ULL-ESIT-SYTW-1617/nueva-funcionalidad-para-el-paquete-npm-plugins-merquililycony/)

 **Enlace a Gh-pages**

 * [gh-pages](https://ull-esit-sytw-1617.github.io/nueva-funcionalidad-para-el-paquete-npm-plugins-merquililycony/)

 * [npm](https://www.npmjs.com/package/nueva-funcionalidad-para-el-paquete-npm-merquililycony)

 **Página de los autores**

 * [Constanza](http://alu0100673647.github.io)
 * [Merquis](http://merquis.github.io)
 * [Liliana](https://alu0100762846.github.io)
