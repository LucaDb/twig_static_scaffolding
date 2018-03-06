import fs from 'fs';
import gulp from 'gulp';
import twig from 'gulp-twig';
import browserSync from 'browser-sync';

import {path} from './config';
import {error,warning} from './logs';

const printSvg = filename => {
    try {
        let content = fs.readFileSync(`${path.dev.svg}${filename}`)
        return content.toString()
    } catch(err) {
        error(err)
    }
}

const getAssetPath = path => `assets/${path}`

const getPath = path => {
    path = path.match(/(^.*[\\\/]|^[^\\\/].*)/i);
    return path != null ? path[0] : false;
}

const getClassName = function(className) {
    try {
        return JSON.parse(fs.readFileSync(`${getPath(this.path)}style.css.json`))[className]
    } catch(err) {
        error(`${err}`)
        error('Please use style() function inside a component folder.')
    }
}

gulp.task('twig', next => {
    return gulp.src(`${path.dev.html}pages/**/*.twig`)
        .pipe(twig({
            base: path.dev.html,
            data: {},
            functions : [
                {
                    name: 'svg',
                    func: printSvg
                },
                {
                    name: 'style',
                    func: getClassName
                },
                {
                    name: 'asset',
                    func:  getAssetPath
                }
            ]
        }))
        .on('error', ({message}) => {
            error(`ERROR: ${message}`)
            next()
        })
        .pipe(gulp.dest(path.build.html))
});

