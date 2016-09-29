//Dependencias
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');

gulp.task('deploy', function() {
  return gulp.src(['txt/_book/*/*/*','txt/_book/*/*','txt/_book/*'])
    .pipe(ghPages());
});


gulp.task('serve', shell.task([
  'gitbook serve'
]));