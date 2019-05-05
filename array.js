/*
 * 数组常用方法
 */
 import {isArray} from './determine-determine-type';

var toArray = (arraylike, startIndex) => !!Array.from && (Array.from(arraylike) || []).slice(startIndex) || [].slice.call(arraylike, startIndex);

var each = (arraylike, fn) => {
    arraylike = toArray(arraylike);

    if (!![].forEach) {
        arraylike.forEach(fn);
    } else {
        for (let i = 0, len = arraylike.length; i < len; i++) {
            fn && fn(arraylike[i], i);
        }
    }
};

var flat = (arr = []) => {
    if ([].flat) {
        return arr.flat(Infinity);
    } else {
        return arr.reduce((init, cur) => {
            return isArray(cur) ? init.concat(flat(cur)) : init.concat(cur);
        }, []);
    }
};

export {
    toArray,
    each,
    flat
}
