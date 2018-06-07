var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
    return gulp.src('static/sass/**/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('static/stylesheets'))
});


// Gulp Sass Task
gulp.task('sass', function() {
    gulp.src('./scss/**/*.{scss,sass}')
    // Initializes sourcemaps
        .pipe(sourcemaps.init())
        .pipe(sass())
        // Writes sourcemaps into the CSS file
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
})