/**
 * Created by amit.ashutosh on 9/29/15.
 */

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default', function(){
    return browserify('./source/app.js')
            .transform(babelify)
            .bundle()
            .pipe(source('react-first.js'))
            .pipe(gulp.dest('./build'));
});

gulp.task('test', function(){
   return browserify('./source/test.js')
            .transform(babelify)
            .bundle()
            .pipe(source('react-test.js'))
            .pipe(gulp.dest('./build'));
});