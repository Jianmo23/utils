/*
 * 数组常用方法
 */
 import {isArray} from 'common';

var toArray = (arraylike = [], startIndex = 0) => !!Array.from && (Array.from(arraylike) || []).slice(startIndex) || [].slice.call(arraylike, startIndex);

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

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
var flat = (arr = []) => {
    if ([].flat) {
        return arr.flat(Infinity);
    } else {
        return arr.reduce((init, cur) => {
            return isArray(cur) ? init.concat(flat(cur)) : init.concat(cur);
        }, []);
    }
};

var isEmptyArray = arr => !toArray(arr).length;

var copyArray = (arr = []) => [...arr];

var uniqueArray = (arr = []) => [...new Set(arr)];

// 混淆数组
var randomArray = (arr = []) => arr.slice().sort(() => Math.random() - 0.5);

export {
    toArray,
    each,
    flat,
    isEmptyArray,
    copyArray,
    uniqueArray,
    randomArray
}
