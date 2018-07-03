const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('hello', function () {
    console.log('Hello Zell');
});

gulp.task('scss', function () {
    gulp.src('app/scss/style.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function () {
    gulp.watch('app/scss/style.scss', ['scss']);
});

