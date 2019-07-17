/*
 * 通过 UA(navigator.userAgent) 或者指定字符获取版本号
 * @param {String} str (default: window.navigator.userAgent)
 * @return 例如： 1.0.0
 */
export function getVersion (str = window.navigator.userAgent) {
    let m = str.match(/v([\d\.]+)/) || [];
    
    return m[1] && m[1].replace(/\.$/, '');
}

/** https://gist.github.com/puterjam/8518259
 * 判断两个版本号的大小
 * @param {String} v1 原始版本号
 * @param {String} v2 目标版本号
 * @return {Number} >0: v1 > v2, <0: v1 < v2, 0: v1 === v2 
 * @PS 只是用于版本号全是数字字符的情况
 */
 
export function compareVersion (v1 = '', v2 = '') {
    let _v1 = v1.split('.'),
        _v2 = v2.split('.'),
        // 或操作是为了占位，避免NaN
        _r  = parseInt(_v1[0] || 0, 10) - parseInt(_v2[0] || 0, 10);
        
    return v1 !== v2 && _r === 0 ? compareVersion(_v1.splice(1).join('.'), _v2.splice(1).join('.')) : _r; 
} 
