import { debounce } from 'common/debounce.js';
import { throttle } from 'common/throttle.js';

export default function () {
    let imgList = [],
        offset = 20; // 设置图片距离可视区域多远则立即加载的偏差值

    function lazyLoad() {
        for (let i = 0, len = imgList.length; i < len; i++) {
            let img = imgList[i];
            if (isShow(img)) {
                img.src = img.getAttribute('data-src');
                // 加载完后，从列表中删除，避免下次重复判断，减少后续的性能消耗
                imgList.splice(i, 1);
                // 防止遗漏
                i -= 1;
            }
        }
    }

    function isShow(el) {
        // 判断当前图片是否在视口
        let coords = el.getBoundingClientRect();

        return coords.top >= 0 &&
            coords.left >= 0 &&
            coords.bottom <= offset + (window.innerHeight || document.documentElement.clientHeight) &&
            coords.right <= offset + (window.innerWidth || document.documentElement.clientWidth);
        
    }

    function loadImages(selector) {
        // 获取 image 需要懒加载的 DOM 对象
        let _s = selector || '.img-lazy';
        imgList = document.querySelectorAll(_s);

        imgList = Array.from(doms);

        window.addEventListener('scroll', throttle(lazyLoad, 2000), false)
    }

    loadImages();
}