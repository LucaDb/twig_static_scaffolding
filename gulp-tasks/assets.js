import gulp from 'gulp';

import {path} from './config';

['media','fonts','img'].forEach((taskName, i) => {
    gulp.task(taskName, () => {
        return gulp.src(path.dev[taskName] + '/**/*')
        .pipe(gulp.dest(path.build[taskName]))
    });
});
