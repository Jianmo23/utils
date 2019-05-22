// 常用格式化方法
// 格式化金钱
const formatteMoney = money => money && money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export {
    formatteMoney
}
