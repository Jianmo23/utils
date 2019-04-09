/*
 * 数组常用方法
 */
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

export {
    toArray,
    each
}
