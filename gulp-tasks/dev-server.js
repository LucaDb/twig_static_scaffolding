import gulp from 'gulp';
import browserSync from 'browser-sync';
import htmlInjector from 'bs-html-injector';

import {path} from './config';

gulp.task('dev-server', () => {
    browserSync.use(htmlInjector, {
        files: "./build/**/*.html"
    });
    browserSync.init({
        logLevel: 'info',
        server: { baseDir: path.build.root}
    });
});
