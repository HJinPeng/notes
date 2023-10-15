# 手写 `Array.isArray()`

```js
Array.myIsArray = function(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}
```