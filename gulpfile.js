// Load plugins
// include gulp
var gulp = require('gulp'); 
// include gulp-sass plugin
var sass = require('gulp-sass');
// include gulp-notify plugin
var notify = require('gulp-notify');
// include gulf-filesize plugin
var filesize = require('gulp-filesize');


gulp.task('sass', function(){
  return gulp.src('css/demo.scss')		  
	     .pipe(sass()) // Converts Sass to CSS with gulp-sass 
	     .pipe(filesize()) //to to know the file size
         .pipe(gulp.dest('css'))
         .pipe(notify({ message: 'Styles task complete' }))// notify a essage when the task is complete 
});

gulp.task('watch', function(){
  gulp.watch('css/*.scss', ['sass']);   //watch all .scss files in css folder

});

//default  task
gulp.task('default', function() {
    gulp.start('sass');
});