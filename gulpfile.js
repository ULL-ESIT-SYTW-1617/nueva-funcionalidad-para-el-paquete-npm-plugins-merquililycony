var gulp = require('gulp');
var shell = require('gulp-shell');
var install = require('gulp-install');
var myArgs = require('minimist')(process.argv.slice(2));
var git = require('simple-git');


// Repositorio Github
gulp.task('push_github', function(){
    git()
        .init()
        .add('./*')
        .commit("subiendo libro al repo")
        .addRemote('origin', 'https://github.com/ALU0100673647/tutu.git')
        .push('origin', 'master');
});

// Install dependencies and resources

gulp.task('instalar-recursos', function()
{
    gulp.src(['./package.json']).pipe(install());
});


//Deploy
gulp.task('deploy', ['instalar-recursos', 'push'], function()
{
    return gulp.src('')
           .pipe(shell([
            'npm publish'
           ]))
});




gulp.task('default', ['deploy']);



