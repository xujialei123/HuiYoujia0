var gulp = require('gulp'),  
   sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
//  jshint = require('gulp-jshint'),//校验js语法
    uglify = require('gulp-uglify'),//压缩js代码
    imagemin = require('gulp-imagemin'),//亚索图片
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),//合并js文件
    notify = require('gulp-notify'),//更改提醒
    cache = require('gulp-cache'),//图片缓存
    livereload = require('gulp-livereload');//重新加载

gulp.task("sass",function(){
	return gulp.src('sass/*.scss').pipe(sass()).pipe(gulp.dest('css')).pipe(rename({'suffix':'.min'})).pipe(minifycss()).pipe(gulp.dest('css'))
})
gulp.task('watch',function(){
	gulp.watch("sass/*.scss",['sass'])
})
