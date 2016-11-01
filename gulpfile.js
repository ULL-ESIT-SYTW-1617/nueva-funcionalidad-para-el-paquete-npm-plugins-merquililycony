var gulp = require('gulp');
var shell = require('gulp-shell');
var install = require('gulp-install');
var myArgs = require('minimist')(process.argv.slice(2));
var git = require('simple-git');


// Repositorio Github
gulp.task('push', function(){
    git()
        .add('./*')
        .commit("update package")
        .push('origin', 'master');
});

// Install dependencies and resources

gulp.task('install-resource', function()
{
    gulp.src(['./package.json']).pipe(install());
});


//Deploy
gulp.task('deploy', ['install-resource', 'push'], function()
{
    return gulp.src('')
           .pipe(shell([
            'npm publish'
           ]))
});


// Pull de iaas

gulp.task('iaas', function() {
    gulp.src(['./template/scripts/iaas']).exec();
});


gulp.task('default', ['deploy']);
