'use strict';

import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import cssNano from 'gulp-cssnano';
import rename from 'gulp-rename';
import gutil from 'gulp-util';
import livereload from 'gulp-livereload';

// compile SASS with sourcemaps
gulp.task('sass', () => {
    gulp.src(global.paths.sass)
        .pipe(sourcemaps.init())
        .pipe(sass()).on('error', function(error) {
            gutil.log(error.toString());
            this.emit('end');
        })
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(global.paths.css))
        .pipe(livereload());
});

// compile SASS (excludes sourcemaps)
gulp.task('sass_dist', () => {
    gulp.src(global.paths.sass)
        .pipe(sass()).on('error', function(error) {
            gutil.log(error.toString());
            this.emit('end');
        })
        .pipe(autoprefixer())
        .pipe(cssNano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(global.paths.dist));
});
