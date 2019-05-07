const gulp = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');

// 编译less
gulp.task('css', function () {
  gulp.src('../src/styles/index.less')
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(gulp.dest('../dist/styles'));
});

// 拷贝字体文件
gulp.task('fonts', function () {
  gulp.src('../src/styles/iconfont/fonts/*.*')
    .pipe(gulp.dest('../dist/styles/fonts'));
});

gulp.task('default', ['css', 'fonts']);
