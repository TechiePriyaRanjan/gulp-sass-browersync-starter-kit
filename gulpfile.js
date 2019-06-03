const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

// compiling scss into css
function style(){
    //where is my scss files
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'))
        .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);

}

exports.style = style;
exports.watch = watch;