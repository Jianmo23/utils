// js 生成不重复标识 id

// 方法一
var prefixStr = num => num < 10 ? ('0' + num) : num;

var formateData = () => {
    var now = new Date();

    let year = now.getFullYear(),
        month = prefixStr(now.getMonth()),
        day = prefixStr(now.getDate()),
        h = prefixStr(now.getHours()),
        m = prefixStr(now.getMinutes()),
        s = prefixStr(now.getSeconds());

    return '' + year + month + day + h + m + s;
};

// var uUId = formateData() + Math.random().toString(36).slice(2);
// 20190324105149t8xtk9biys

// 方法二
var generateUUId = () => {
    // return formateData() + Math.random().toString(36).slice(2);
    var d = new Date().getTime();

    if (window.performance && typeof window.performance.now !== 'undefined') {
        // use high-precision timer if available
        d += performance.now();
    }

    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        let r = (d + Math.random() * 16) % 16 | 0;

        d = Math.floor(d / 16);

        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });

    return uuid;
};

var uUId = generateUUId();

export {
    uUId,
    generateUUId
}
