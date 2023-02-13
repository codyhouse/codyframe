var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass-embedded'));
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();

var cssFolderPath = 'main/css';
var scssFolderPath = 'main/scss';

function reload(done) {
  browserSync.reload();
  done();
};

gulp.task('browserSync', gulp.series(function (done) {
  browserSync.init({
    server: {
      baseDir: 'main'
    },
    notify: false
  })
  done();
}));

function compileCss(file) {
  return gulp.src(scssFolderPath+'/'+file+'.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([autoprefixer()]))
  .pipe(gulp.dest(cssFolderPath))
  .pipe(browserSync.reload({
    stream: true
  }));
};
function compileGlobals(file) {
  return gulp.src(scssFolderPath+'/'+file+'.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([autoprefixer()]))
  .pipe(gulp.dest(cssFolderPath));
};

gulp.task('watch', gulp.series(['browserSync'], function () {
  gulp.watch('main/*.html', gulp.series(reload));
  gulp.watch('main/scss/**/*.scss').on('change', function(file) {
    compileCss('style');
    if(file.includes('config.scss') || file.includes('buttons.scss')) compileGlobals('buttons');
    if(file.includes('config.scss') || file.includes('forms.scss')) compileGlobals('forms');
    if(file.includes('config.scss') || file.includes('icons.scss')) compileGlobals('icons');
    if(file.includes('config.scss') || file.includes('typography.scss')) compileGlobals('typography');
    if(file.includes('config.scss') || file.includes('util.scss')) compileGlobals('util');
    if(file.includes('reset.scss')) compileGlobals('reset');
  });
}));