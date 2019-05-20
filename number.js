// 数值运算常用方法
/* 运算符：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators */
// 指数运算符（**）
// 精确小数
var roundNum = (num, decimal = 1) => Math.round(num * 10 ** decimal) / 10 ** decimal;
// roundNum(1.69, 1) 1.7
// roundNum(1.69, 2) 1.69


// 判断奇偶
var oddEven = num => (num & 1) ? 'odd' : 'even';

// 取最大值
var max = (...rest) => Math.max(...rest);

// 取最小值
var min = (...rest) => Math.min(...rest);

// 在指定范围内，生成随机数
var randomNUm = (min, max) => Math.floor(Math.random() * (max- min + 1)) + min;

export {
    roundNum,
    oddEven,
    max,
    min,
    randomNUm
}
