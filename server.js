

var gulp = require('gulp');
var git = require('simple-git');
// instanciar


var mensaje_commit = "subiendo cambios";
    

gulp.task('deploy-heroku', function(){
    console.log("Despligue en Heroku");
    git()
        .add('./*')
        .commit(mensaje_commit)
        .push('heroku','master');
    
});


