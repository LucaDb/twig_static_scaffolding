let baseDev = './src/';
let baseProd = './build/';

export const path = {
    dev : {
        html  :  `${baseDev}html/`,
        sass  :  `${baseDev}assets/sass/`,
        js    :  `${baseDev}assets/js/`,
        svg   :  `${baseDev}assets/svg/`,
        media :  `${baseDev}media/`,
        img   :  `${baseDev}assets/img/`,
        fonts :  `${baseDev}assets/fonts/`
    },
    build : {
        root  :  baseProd,
        html  :  baseProd,
        css   :  `${baseProd}assets/css/`,
        js    :  `${baseProd}assets/js/`,
        media :  `${baseProd}media/`,
        img   :  `${baseProd}assets/img/`,
        fonts :  `${baseProd}assets/fonts/`
    }
}

export const isProduction =  () => process.env.NODE_ENV == 'production'
