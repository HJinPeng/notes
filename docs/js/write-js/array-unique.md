# 数组去重

## 使用 `new Set()`

```js
let arr = [1, 1, 7, 8, 3, 6, 7, 8, 8, 1];
let result1 = [...new Set(arr)];  // [1, 7, 8, 3, 6]
let result2 = Array.from(new Set(arr));  // [1, 7, 8, 3, 6]
```

## 手写

```js
function arrayUnique(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    })
}
```