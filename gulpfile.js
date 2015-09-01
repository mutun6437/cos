var gulp = require('gulp');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

gulp.task('browserify', function(){
  var b = browserify({
    entries: ['./client/jsx/main.jsx','./client/jsx/view.jsx'],
    transform: [reactify]
  });
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./client/js'));
});

var sass = require("gulp-sass");
 
gulp.task("sass", function() {
    gulp.src("./client/dest/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./client/css"));
});


