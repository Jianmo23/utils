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
