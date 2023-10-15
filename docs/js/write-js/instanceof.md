# 手写 `instanceof`

```js
function myInstanceof(obj, Constructor) {
    if(typeof Constructor !== 'function') throw new TypeError("Right-hand side of 'instanceof' is not callable")
    
    // 获取原型
    let prototype = Object.getPrototypeOf(obj);
    // 沿着原型链判断
    while(prototype !== null) {
        if(prototype === Constructor.prototype) {
            return true;
        }
        prototype = Object.getPrototypeOf(prototype);
    }
    return false;
}
```