const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

// compiling scss into css
function style(){
    //where is my scss files
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/css/'))
}

exports.style = style;