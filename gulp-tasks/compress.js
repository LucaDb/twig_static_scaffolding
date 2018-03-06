import gulp from 'gulp';
import uglify from 'gulp-uglify';
import uglifycss from 'gulp-uglifycss';
import htmlmin from 'gulp-htmlmin';

import {path} from './config';

const compressJS = () => gulp.src([`${path.build.js}*.js`])
    .pipe(uglify())
    .pipe(gulp.dest(path.build.js))

const compressCSS = () => gulp.src([`${path.build.css}**/*.css`])
    .pipe(uglifycss())
    .pipe(gulp.dest(path.build.css))

const compressHTML = () => gulp.src([`${path.build.html}**/*.html`])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(path.build.html))


gulp.task('compress', gulp.series(compressJS,compressCSS,compressHTML))
