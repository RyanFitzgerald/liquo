var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefix = require('gulp-autoprefixer');

gulp.task('compress', function() {
    return gulp.src('liquo/liquo.js')
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('liquo'));
});

gulp.task('sass', function() {
    return gulp.src('liquo/liquo.scss')
        .pipe(sass())
        .pipe(autoprefix())
        .pipe(gulp.dest('liquo'));
});

gulp.task('watch', ['compress', 'sass'], function() {
    gulp.watch('liquo/*.js', ['compress']);
    gulp.watch('liquo/*.scss', ['sass']);
});
