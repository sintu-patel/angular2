var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');

// Plugins
var precss = require('precss');
// var cssnano = require('cssnano'); disable for now and see unminified css
var lost = require('lost');
var cssnext = require('cssnext');
var autoprefixer = require('autoprefixer');
var postcssImport = require("postcss-import")
var vars = require('postcss-simple-vars');

gulp.task('runPostCss', function () {
	return gulp.src('app/stylesheet/precss/style.css')
		.pipe(sourcemaps.init())
		.pipe(postcss([vars, precss, lost, autoprefixer, postcssImport, cssnext]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('app/assets/css/'));
});

gulp.task('default', ['runPostCss']);