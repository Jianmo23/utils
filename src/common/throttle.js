// 函数节流：规定在一个单位时间内，只能触发一次函数。如果在这个单位时间内触发多次函数，只有一次生效。
export function throttle(callback = function () {}, delay = 0) {
    let last, id;
    return function (...args) {
        let cur = new Date().now(), _this = this;
        if (cur - last < delay) {
            clearTimeout(id)
            
            id = setTimeout(function () {
                callback.apply(_this, args);
                last = cur;
            }, delay)
            return;
        }

        callback.apply(_this, args);
        last = cur;
    }
}