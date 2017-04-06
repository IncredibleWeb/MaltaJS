'use strict';

import gulp from 'gulp';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import gutil from 'gulp-util';

const b = browserify({
    entries: `${global.paths.src}/js/main.js`,
    debug: true,
    transform: [babelify.configure({
        presets: ['es2015']
    })]
});

// babelify JavaScript files
gulp.task('scripts', () => {
    return b.bundle().on('error', function(error) {
            gutil.log(error.toString());
            this.emit('end');
        })
        .pipe(source(`${global.paths.src}/js/main.js`))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(concat('script.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(global.paths.src));
});