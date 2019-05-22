/*
 * 对象常用方法
 */
import {isObject} from '../common/determine-type';

var isEmptyObject = obj => isObject(obj) ? !Object.keys(obj) : true;

var copyObject = (obj = {}) => {
    // return {...obj};
    return JSON.parse(JSON.stringify(obj));
};

var extendObject = (...rest) => {
    let oo = {};

    for (let item of rest) {
        let tmp = copyObject(item) || {};

        for (let key in tmp) {
            oo[key] = tmp[key];
        }
    }

    return oo;
};

export {
    isEmptyObject,
    copyObject,
    extendObject
};
