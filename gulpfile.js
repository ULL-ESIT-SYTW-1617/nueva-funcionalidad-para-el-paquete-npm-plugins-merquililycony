var gulp = require('gulp');
var shell = require('gulp-shell');
var install = require('gulp-install');
var path = require('path');
var json = require(path.join(__dirname,'package.json'));
var git = require('simple-git');
var fs = require('fs-extra');

// Repositorio Github
gulp.task('push_github', function(){
    git()
        .init()
        .add('./*')
        .commit("subiendo libro al repo")
        .addRemote('origin', json.repository.url)
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



