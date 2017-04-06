'use strict';

import gulp from 'gulp';

gulp.task('build', ['build_sass', 'build_js']);

// build SASS for distribution
gulp.task('build_sass', ['sass', 'lint_sass']);

// build JS for distribution
gulp.task('build_js', ['scripts', 'lint_js']);
