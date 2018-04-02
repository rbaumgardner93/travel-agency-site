const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('default', function() {
  console.log('Hooray - you created a Gulp task.');
})

gulp.task('html', function() {
  console.log('Imagine something useful happening to you HTML here.');
})

gulp.task('styles', function() {
  console.log('Imagine Sass or PostCSS styles happening here.');
})

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  })

});