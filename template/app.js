// importar
var express = require('express');

// instanciar
var app = express();
var path = require('path');

var exec = require('child_process').exec;
var  expressEJS = require('express-ejs-layouts')

   // ruteo

app.set('port', process.env.PORT || 8080);
app.use(expressEJS);
app.use(express.static(path.join(__dirname,'gh-pages')));

app.get('/', function(request, response) {
 response.send('index');
});


/*app.post('/sync', function(request, response) {
        function puts(error, stdout, stderr) {
           console.log("Salida:"+stdout);
           if(error) console.log("Error:"+error);
         }

   exec('git clone https://github.com/ULL-ESIT-SYTW-1617/nueva-funcionalidad-para-el-paquete-npm-plugins-merquililycony');
   exec("git pull https://github.com/ULL-ESIT-SYTW-1617/nueva-funcionalidad-para-el-paquete-npm-plugins-merquililycony.git  master", puts);
   response.redirect('/');
});*/


    // escuchar
   // app.listen(8080);


//heroku git:remote -a heroku-project-name
app.listen(app.get('port'), function() {
  console.log('Servidor escuchando en el puerto:'+app.get('port'));
});


module.exports = app;
