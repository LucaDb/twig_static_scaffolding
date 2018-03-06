import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer  from 'autoprefixer';
import postcss from 'gulp-postcss';
import postcssModules from 'postcss-modules';
import concat from 'gulp-concat';
var tildeImporter = require('node-sass-tilde-importer');


import {path} from './config';
import {error} from './logs';

const postCSSPlugins = [
    autoprefixer({ browsers: ['last 3 version', 'safari 7', 'ie 9','ie 10', 'ios 7', 'android 4'] }),
    postcssModules({ generateScopedName: '[folder]__[local]___[hash:base64:5]' })
];

gulp.task('styles', () => {
  return gulp.src([`${path.dev.sass}**/*.scss`,`${path.dev.html}**/*.scss`])
    .pipe(sourcemaps.init())
    .on('error', ({messageFormatted}) => { error(messageFormatted) })
    .pipe(sass({importer: tildeImporter}))
    .pipe(postcss(postCSSPlugins))
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css))
    .pipe(browserSync.stream());
})


