var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    bower = require('gulp-bower'),
    rimraf = require('gulp-rimraf');

var config = {
     bowerDir: './bower_components' 
};

gulp.task('clean', function() {
 return gulp.src('./public/**', { read: false }) // much faster
   // .pipe(ignore('node_modules/**'))
   .pipe(rimraf());
});

gulp.task('script', function () {
    gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});

gulp.task('copy-html', function() {
    gulp.src('src/view/**/*.html')
    .pipe(gulp.dest('./public/view'));
});

// 编译less
// 在命令行输入 gulp less 启动此任务
gulp.task('less', function () {
    // 1. 找到 less 文件
    gulp.src('src/less/**.less')
    // 2. 编译为css
        .pipe(less())
    // 3. 另存文件
        .pipe(gulp.dest('public/css'));
});

// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 script 任务
    gulp.watch('src/js/**/*.js', ['script']);
    gulp.watch('src/less/**.less', ['less']);
    gulp.watch('src/view/**/*.html', ['copy-html']);
});

gulp.task('default', ['script', 'copy-html', 'less', 'auto']);
