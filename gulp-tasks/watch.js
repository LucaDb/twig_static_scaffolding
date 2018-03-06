import gulp from 'gulp';

import styles from './sass';
import twig from './twig';
import js from './javascripts';
import server from './dev-server';
import htmlInjector from 'bs-html-injector';
import {path} from './config';

const watchProcess = () => {
    gulp.watch([`${path.dev.sass}**/*.scss`,`${path.dev.html}**/*.scss`], { usePolling: true }, gulp.series('styles'));
    gulp.watch(`${path.dev.html}**/*.twig`, { usePolling: true }, gulp.series('twig'));
    gulp.watch([`${path.dev.media}**/*`,`${path.dev.img}**/*`], { usePolling: true }, gulp.series('media','fonts','img'));
}

gulp.task('watch', gulp.parallel(watchProcess,'dev-server','js'));
