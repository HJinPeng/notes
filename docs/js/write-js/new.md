# 手写 `new`

```js
function Person(name) {
    this.name = name;
}

const person = new Person('xiaoming')
```

## 思路 
  
1. 创建一个新的空对象，并将其原型设置为 构造函数的原型
2. 将新的空对象作为构造函数的上下文执行得到 result
3. 如果 result 是一个对象，则返回 result ，否则返回新的空对象

## 实现

### ES5后实现，有 Object.create()

```js
function myNew(Constructor, ...args) {
    // 创建一个新的空对象，并将其原型设置为构造函数的原型
    const obj = Object.create(Constructor.prototype);

    // 调用构造函数，并将新创建的空对象作为上下文
    const result = Constructor.apply(obj, args);

    // 如果构造函数返回一个对象，则返回对象，否则返回新创建的对象
    return typeof result === 'object' ? result : obj;
}
```

### ES3，无 Object.create()

```js
function myNew() {
    var Constructor = Array.prototype.shift.call(arguments);

    // 创建一个新的空对象，并将其原型指向构造函数的原型（ => 手写一个 `Object.create()` ）
    function F() {}
    F.prototype = Constructor.prototype;
    var obj = new F();

    // 调用构造函数，并将新对象作为上下文
    var result =Constructor.apply(obj, arguments);

    // 如果构造函数返回一个对象，则返回对象，否则返回新创建的对象
    return typeof result === 'object' ? result : obj;
}
```
