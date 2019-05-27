// 常用格式化方法
// 格式化金钱
const formatMoney = money => money && money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export {
    formatMoney
}
