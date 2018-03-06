import gulp from 'gulp';
import del from 'del';

import tasks from './gulp-tasks';
import {path} from './gulp-tasks/config'
import {info} from './gulp-tasks/logs'


let commomTasks = ['styles', 'media', 'fonts', 'img', 'twig'];
const clean = () => del([ path.build.root ]);

gulp.task('prod-node-env', () => {
    return new Promise(function(resolve, reject) {
        info('Setting NODE_ENV to production...')
        process.env.NODE_ENV = 'production';
        resolve();
    });
});

gulp.task('default', gulp.series(...commomTasks, 'watch'));
gulp.task('build', gulp.series('prod-node-env','js', ...commomTasks, 'compress'));


