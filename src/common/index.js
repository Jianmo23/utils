/*
 * 判断数据类型
 */
const TYPE = o => Object.prototype.toString.call(o).replace(/\[object\s|\]/ig, '');

var isArray = arr => !!Array.isArray && Array.isArray(arr) || TYPE(arr) === 'Array';

var isObject = obj => !obj ? false : TYPE(obj) === 'Object';

var isFunction = fn => !fn ? false : TYPE(fn) === 'Function';

var isString = str => TYPE(str) === 'String';

var isNumber = num => TYPE(num) === 'Number';

// [谈谈Javascript中的void操作符](https://segmentfault.com/a/1190000000474941)
var isUndefined = param => param === void 0;

export {
    isArray,
    isObject,
    isFunction,
    isString,
    isNumber,
    isUndefined
}

// 操作URL查询参数
var searchParams = (str = location.search) => {
    let tmp = str.replace(/\?/ig, '');
    let obj = {};

    if (!window.URLSearchParams) {
        let params = new URLSearchParams(tmp);

        for (let [key, value] of params) {
            obj[key] = value;
        }
    } else {
        let arr = str && str.split('&');

        for (let i = 0, len = arr.length; i < len; i++) {
            let tmpArr = arr[i].split('=');

            obj[tmpArr[0]] = tmpArr[1];
        }
    }

    return obj;
};

export {
    searchParams
}
