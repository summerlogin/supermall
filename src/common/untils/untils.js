/* 防抖函数 */
export function debounce(func, wait) {
  //防抖函数
  return function (...arg) {
    let timer = null;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arg);
    }, wait);
  };
}
