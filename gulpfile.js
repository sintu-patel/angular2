var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');

// Plugins
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var postcssImport = require("postcss-import")

gulp.task('runPostCss', function () {
	return gulp.src('app/stylesheet/precss/style.css')
		.pipe(sourcemaps.init())
		.pipe(postcss([precss, autoprefixer, postcssImport]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('app/assets/css/'));
});

gulp.task('default', ['runPostCss']);