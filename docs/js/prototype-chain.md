# 原型和原型链

## 什么是原型

每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性

## 什么是原型链

每个对象都有与之关联的原型对象，原型对象也有与之关联的原型对象，直到 `Object.prototype.__proto__`, 即 `null` 

## 4个概念

1. js 分为 **函数对象** 和 **普通对象**。每个对象都有 `__proto__` 属性，但是只有 **函数对象** 有 `prototype` 属性
2. `__proto__` 属性也是一个对象（原型对象），它有 `constructor` 指向构造函数，也有 `__proto__` 指向此原型对象的原型对象
3. 原型对象（如 `Object.prototype`），有一个 `constructor` 属性，记录实例是由哪一个构造函数创建的
4. `Object`、 `Function` 都是 js 内置的函数，除此之外还有 `Array`, `RegExp`, `Date`, `Boolean`, `Number`, `String`

## 2个准则

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.country = 'China';

let person = new Person('hjp', 18);
Person.prototype.constructor === Person; // 准则1
person.__proto__ === Person.prototype;  // 准则2
```

1. 原型对象（ `Person.prototype` ）的 `constructor` 指向构造函数本身（ `Person` ）
2. 实例（ `person` ）的 `__proto__` 和 原型对象（ `Person.prototype` ） 指向同一个地方

## 关系图
![原型和原型链关系图](/assets/img/js/prototype-chain.webp)

## 分析

### 上方的 function Foo() 分析

```js
function Foo() {}
let f1 = new Foo();
let f2 = new Foo();
f1.__proto__ === Foo.prototype;
Foo.prototype.__proto__ === Object.prototype;   // Foo.prototype 的本质是一个普通对象，所以__proto__指向Object.prototype;
Object.prototype.__proto__ === null;  // 实例f1,f2的原型链到此为止

Foo.prototype.constructor === Foo; // 准则1

Foo.__proto__ === Function.prototype; // 准则2
Function.prototype.__proto__ === Object.prototype;
Object.prototype.__proto__ === null; // 函数Foo的原型链到此结束
```

### 中间的 function Object() 分析

```js
function Object() {}
let o1 = new Object();
o1.__proto__ === Object.prototype;
Object.prototype.__proto__ === null; // 实例的原型链结束

Object.prototype.constructor === Object;

Object.__proto__ === Function.prototype; // Object本身是个函数
Function.prototype.__proto__ === Object.prototype;
Object.prototype.__proto__ === null; // Object的原型链到此结束
```

### 从下方的 function Function() 分析

```js
function Function() {}
Function.prototype.constructor === Function
Function.__proto__ === Function.prototype
```

### 结论

除了 `Object` 的原型对象（ `Object.prototype` ）的 `__proto__` 指向 `null`，其他内置函数的原型对象（ `Array.prototype` ）和自定义构造函数的原型对象（ `Foo.prototype` ）的 `__proto__` 都指向 Object.prototype; 因为 **原型对象本身是普通对象**。

```js
Object.prototype.__proto__ === null;
Array.prototype.__proto__ === Object.prototype;
Foo.prototype.__proto__ === Object.prototype;
```

## 参考文章
1. [Github: JavaScript深入之从原型到原型链](https://github.com/mqyqingfeng/blog/issues/2)
2. [掘金: 轻松理解JS 原型原型链](https://juejin.cn/post/6844903989088092174)