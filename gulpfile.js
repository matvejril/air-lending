var gulp = require('gulp');
var less = require('gulp-less');
var browserify = require('gulp-browserify');
var rename = require("gulp-rename");
var browserSync = require('browser-sync').create();

var configs = {
    src: {
        less: 'less/index.less',
        js: 'scripts/main.js'
    },
    dist: {
        css: 'css',
        js: 'scripts'
    },
    watch: {
        html: 'index.html',
        less: 'less/*.less',
        css: 'css/index.css',
        js: 'scripts/**/*.js'
    }
};

gulp.task('default', ['less'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch(configs.watch.html).on('change', browserSync.reload);
    gulp.watch(configs.watch.less, ['less']);
    gulp.watch(configs.watch.js, ['js']);
});

gulp.task('less', function() {
    return gulp.src(configs.src.less)
        .pipe(less())
        .pipe(gulp.dest(configs.dist.css))
        .pipe(browserSync.stream({ match: '**/*.css' }));
});

// gulp.task('js', function() {
//     return gulp.src(configs.src.js)
//         .pipe(browserify({
//             insertGlobals : true,
//             debug : !gulp.env.production
//         }))
//         .pipe(rename('bundle.js'))
//         .pipe(gulp.dest(configs.dist.js))
//         .pipe(browserSync.stream({match: '**/*.js' }));
// });