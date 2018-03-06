export const x = (selector, context = document) => context.querySelectorAll(selector);

export const x0 = (selector, context = document) => context.querySelector(selector);

export const isTouch = (() =>  (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)))();

export const getOffsetTop = elem => {
    var offsetTop = 0
    do {
        if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop
        }
    } while (elem = elem.offsetParent)
    return offsetTop
}

export const getScrollTop = () => {
    if (typeof pageYOffset!= 'undefined'){
        return pageYOffset;
    } else {
        var doc = document,
            B   = doc.body,
            D   = doc.documentElement

        D = (D.clientHeight) ? D : B
        return D.scrollTop
    }
}

export const encodeURLComponent = str => {
    return encodeURIComponent(str).replace(/[!'()*]/g, escape)
}

export const getParametersFromURL = () => {
    var re = /(?:\?|&(?:amp;)?)([^=&#]+)(?:=?([^&#]*))/g,
        match, params = {},
        url = document.location.href,
        decode = s => decodeURIComponent(s.replace(/\+/g, " "))

    while (match = re.exec(url)) {
        if(!params[decode(match[1])]) {
            params[decode(match[1])] = []
        }
        params[decode(match[1])].push(decode(match[2]))
    }

    return params
}

export const closest = (el, parentClass) => {
    do {
        if ( el.classList && el.classList.contains(parentClass)) {
            return el
        }
    } while (el = el.parentNode)

    return null
}

export const minmax = (value, min, max) => {
    if (parseInt(value) < min || isNaN(parseInt(value)))
        return min
    else if (parseInt(value) > max)
        return max
    else
        return value
}
