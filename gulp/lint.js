'use strict';

import gulp from 'gulp';
import cache from 'gulp-cached';
import eslint from 'gulp-eslint';
import sassLint from 'gulp-sass-lint';

// lint all the things!
gulp.task('lint', ['lint_js', 'lint_sass']);

// lint JS
gulp.task('lint_js', () => {
    return gulp.src(global.paths.js)
        .pipe(cache('lint_js'))
        .pipe(eslint())
        .pipe(eslint.format());
});

// lint SASS
gulp.task('lint_sass', () => {
    return gulp.src(global.paths.sass)
        .pipe(cache('lint_sass'))
        .pipe(sassLint())
        .pipe(sassLint.format());
});
