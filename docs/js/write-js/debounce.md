# 防抖

## 定义

**普通防抖**：在 n 秒内重复触发，取消上次操作，直到 n 秒后**没有触发**才执行。如搜索框  

**立即执行**：立即触发，在 n 秒内重复触发，取消上次操作，直到 n 秒后，**重新触发**才执行。如点赞、收藏按钮

## 实现

```js
function debounce(fn, wait, immediate) {
    let timer;
    return function() {
        // n 秒内重复触发，取消上次
        timer && clearTimeout(timer);
        if(immediate) {
            // 立即执行
            !timer && fn.apply(this, arguments);
            // n 秒后设置为 null, 再次触发才执行
            timer = setTimeout(() => {
                clearTimeout(timer);
                timer = null;
            }, wait);
        }else {
            timer = setTimeout(() => {
                // n 秒后执行
                fn.apply(this, arguments)
            }, wait);
        }
    }
}
```
