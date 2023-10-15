# 数组扁平化

## `Array.prototype.flat()`

```js
let arr = [1, [2, 3], [[4, 5, [6, 7], 8], 9, [10]]];
arr.flat(Infinity); // 默认是1，即展开第一层数组。这里设置全部展开
```

## 手写实现

### ES6 `reduce`

```js
function flatten(arr) {
    return arr.reduce((acc, cur) => {
        return Array.isArray(cur) ? acc.concat(flatten(cur)) : acc.concat(cur)
    }, [])
}
```

### 普通循环

```js
function flatten(arr) {
    let result = [];
    arr.forEach(item => {
        if(Array.isArray(item)) {
            result = result.concat(flatten(item))
        }else {
            result = result.concat(item)
        }
    })
    return result;
}
```