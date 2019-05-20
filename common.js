// 常用方法
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
        let arr = str && str.split('&');console.log(arr)

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
