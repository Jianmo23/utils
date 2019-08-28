// 函数防抖：在事件被触发n秒后再执行回调，如果在这n秒内又被触发则重新计时

export function debounce(callback = function () {}, delay = 500) {
    let id;
    return function (...args) {
        clearTimeout(id);

        let _this = this;

        id = setTimeout(function () {
            callback.apply(_this, args);
        }, delay)
    }
}