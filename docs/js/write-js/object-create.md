# Object.create()

这个 Object 的静态方法，将传入的对象作为原型，创建一个干净的新对象。这个静态方法在原型继承时很有用，如寄生组合继承

## 用法

1. 创建一个纯净的对象，不包含 `toString()` 等任何方法，不含原型链

```js
let pureObj = Object.create(null);
```

2. 创建一个对象，以传入的对象为原型

```js
let parent = {
    name: "parent obj"
}
// child将以parent为原型, child.name 将访问原型（person）上的name。
let child = Object.create(parent); 
```

## 实现 `Object.create()`

```js
function create(obj, defineProperties) {
    if(typeof obj !== 'object' && typeof obj !== 'function') {
        throw new TypeError('Object prototype may only be an Object or null')
    }

    // 核心
    function F() {}
    F.prototype = obj;

    const newObj = new F();
    if(defineProperties) {
        if(typeof defineProperties !== 'object') {
            throw new TypeError('Property descriptor must be an object');
        }
        Object.defineProperties(newObj, defineProperties)
    }
    return newObj;
}
```

