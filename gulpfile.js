let gulp = require('gulp');
let sass = require('gulp-sass');
let watch = require('gulp-watch');


let origin = 'resources/sass/**/*.sass';
let destini = 'public/buildCss';


    gulp.task('sass', gulp.series( function () {
        return gulp.src(origin)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(destini));
    }))

    // gulp.task('sass:watch', gulp.series( function () {
    //     return gulp.watch(destini, gulp.parallel( ['sass'] ));
    // }));

    gulp.task('watch', gulp.series( function () {
        gulp.watch(origin, gulp.parallel( ['sass']) );
    }))

    gulp.task('default',gulp.series( ['sass','watch']));