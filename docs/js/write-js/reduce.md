# 手写 `Array.prototype.reduce`

## 使用

```js
[1, 2, 3].reduce((acc, cur) => acc + cur, 0); // 有默认值，第一次回调的第二个参数是数组的第一个
[1, 2, 3].reduce((acc, cur) => acc + cur); // 无默认值，则第一个值作为默认值，且第一次回调的第二个参数是数组的第二个
```

## 实现

```js
Array.prototype.myReduce = function(callback, preVal) {
    if(typeof callback !== 'function') throw new TypeError('no a function');
    // 下标
    let index = 0;
    let length = this.length;
    // 
    if(preVal === undefined || preVal === null) {
        preVal = this[0];
        index = 1;
    }
    for(; index < length; index++) {
        preVal = callback(preVal, this[index], index, this);
    }
    return preVal;
}
```