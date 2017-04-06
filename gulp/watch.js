'use strict';

import gulp from 'gulp';
import path from 'path';
import util from 'gulp-util';
import runSeq from 'run-sequence';
import livereload from 'gulp-livereload';

function logChanges(event) {
    util.log(
        util.colors.green('File ' + event.type + ': ') +
        util.colors.magenta(path.basename(event.path))
    );
}

// Watch for changes.
gulp.task('watch', ['lint_js', 'scripts', 'lint_sass', 'sass'], () => {
    livereload.listen();
    gulp.watch([global.paths.js], ['lint_js', 'scripts']).on('change', logChanges);
    gulp.watch([global.paths.sass], ['lint_sass', 'sass']).on('change', logChanges);
});
