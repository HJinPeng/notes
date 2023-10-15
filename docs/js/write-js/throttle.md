# 节流

## 定义

在一段时间内多次触发，间隔 n 秒执行1次。如：监听窗口变化

## 实现

### 时间戳

```js
function throttle(fn, wait) {
    let pre = 0;
    return function() {
        const cur = Date.now();
        if(cur - pre > wait) {
            fn.apply(this, arguments);
            pre = cur;
        }
    }
}
```

### 定时器

```js
function throttle(fn, wait) {
    let timer;
    return function() {
        if(!timer) {
            fn.apply(this, arguments);
            timer = setTimeout(() => {
                clearTimeout(timer);
                timer = null;
            }, wait)
        }
    }
}
```