// 加载插件
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');
/*
sass的编译（gulp-ruby-sass）
自动添加css前缀（gulp-autoprefixer）
压缩css（gulp-minify-css）
js代码校验（gulp-jshint）
合并js文件（gulp-concat）
压缩js代码（gulp-uglify）
压缩图片（gulp-imagemin）
自动刷新页面（gulp-livereload）
图片缓存，只有图片替换了才压缩（gulp-cache）
更改提醒（gulp-notify）
清除文件（del）
*/
