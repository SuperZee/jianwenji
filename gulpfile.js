// 加载插件
var gulp = require('gulp'),
    // sass = require('gulp-ruby-sass'),
    sass = require('gulp-sass'),
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

// gulp.task这个API用来创建任务，在命令行下可以输入$ gulp styles来执行上面的任务。
gulp.task('sass',function () {
  //gulp.src这个API设置需要处理的文件的路径，可以是多个文件以数组的形式[main.scss, vender.scss]，也可以是正则表达式/**/*.scss。
  return gulp.src('src/sass/*.scss') //我们使用.pipe()这个API将需要处理的文件导向sass插件
  // .pipe(sass()) // 使用sass默认格式 (default), compact, compressed, or expanded.
  // .on('error',function (error) {
  //   console.log('编译出错',error.message);
  //   // this.end();
  // })
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('public/stylesheets'))//gulp.dest()API设置生成文件的路径，一个任务可以有多个生成路径，一个可以输出未压缩的版本，另一个可以输出压缩后的版本。
  .pipe(notify({message : 'Style task complete'}));
});

/*监听文件变化 并执行对应的任务*/
gulp.task('sass:watch',function () {
   gulp.watch('src/sass/*.scss', ['sass']);
});




/**/
