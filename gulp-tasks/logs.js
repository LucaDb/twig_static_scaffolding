import colors from 'ansi-colors';

export const info = message => {
    console.log(colors.bold(colors.cyan('[info]')), colors.cyan(message));
}

export const warning = message => {
    console.log(colors.bold(colors.yellow('[warning]')), colors.yellow(message));
}

export const error = message => {
    console.error(colors.bold(colors.red('[ERROR]')), colors.red(message));
}


