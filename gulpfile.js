// Gulp
var gulp = require('gulp');

// Plugins
var sass = require('gulp-sass');
var inlinesource = require('gulp-inline-source');
var server = require('gulp-server-livereload');

// Sass
gulp.task('sass', function () {
  gulp.src('./src/styles/**/*.scss')
    .pipe(sass({
    	//outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

// Inline Source
gulp.task('inlinesource', function () {
	return gulp.src('./src/markup/*.html')
		.pipe(inlinesource({
			rootpath: './'
		}))
		.pipe(gulp.dest('./'));
});

// Server
gulp.task('server', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

// Watch
gulp.task('watch', function () {
  gulp.watch(
    ['./src/styles/**/*.scss', './src/markup/*.html'],
    ['sass', 'inlinesource']
  );
});

// Default Task
gulp.task('default', ['server', 'watch']);
