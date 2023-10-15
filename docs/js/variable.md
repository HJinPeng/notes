# 变量数据类型、存储、判断

## 数据类型

基础类型（值类型）： undefined, null, String, Number, Boolean, Symbol, Bigint

引用类型：Array, Object, Function

## 栈&堆

### 什么是堆？

堆是一块很大的内存空间，可以在里面存储任何类型的数据。但是操作系统不会管里面存了什么，不会主动去清理，所以C语言需要程序员手动去清除堆中的数据，而高级语言如Java、JavaScript 设计了一套垃圾回收（GC）机制，去清理堆中不再使用的数据。在栈中存储不了的数据，就会被存储在堆中，而栈中则存其在堆中的内存地址。

### 什么是栈？

栈是内存中一块用于存储局部变量和函数参数的线性结构，遵循着先进后出的原则。出入栈只是栈指针的移动。栈中的变量在函数调用结束后就会消失。

## 变量存储机制

对于基础类型（值类型）存储在栈中。对于引用类型，其值存储在堆中，栈中存储的是堆内存地址。但是涉及到 **闭包** 时，会有点不一样。

```js
function addTimes() {
  	let times = 0;
    function add() {
      times++;
      console.log('次数：',times);
    }
    return add;
}
// addTimes 函数执行完毕，外部作用域链仍然存在，即times变量仍然在内存中
const add = addTimes();
add();  // 次数： 1
add();  // 次数： 2
```

这里的 times 在 addTimes 调用结束后仍然存在，所以它存放在堆中。  
在堆内存中，生成一个 scope 对象，里面存放着被内部函数引用到的变量 times。下图可以看到，times 变量存放在 `[[Scopes]]` 的 `Closure` 中。    
![scope](/assets/img/js/variable-1.png)

### 三种变量类型

#### 局部变量

在函数中声明，且在函数返回后没有被其他作用域使用的变量。

#### 全局变量

在全局上定义的变量。注意区分 `var`、`let`、`const`。  
在全局上：
  1. `var a = 1;` => `window.a = 1`; 会放在 `[[Scopes]]` 中的最后一个 `Global` 中
  2. `let b = 2;` 不会污染全局环境，而是会放在 `[[Scopes]]` 的 `Script` 中
  3. `const c = 3;` 同第二条

![全局变量定义方式的存放位置](/assets/img/js/variable-2.png)

#### 被捕获变量

在函数声明中，但在函数返回后仍然有未执行的作用域使用到该变量，那么该变量就是被捕获变量，会被存放在 `[[Scopes]]` 的 `Closure` 闭包中

### 总结

1. 除了局部变量，其他都存放在堆中。  
2. 局部变量再根据数据类型区分
   1. 基础类型，小整数、布尔值存放在栈中。字符串存放在堆中，栈中存其堆地址。
   2. 引用类型，栈中存放堆中对象的引用

## 数据类型判断

### typeof

`typeof` 无法区分 `Object`、`Array`、`Date`、`RegExp` 和 `null`，都是返回 `object`

```js
typeof undefined; // undefined
typeof 2;   // number
typeof '2'; // string
typeof true;    // boolean
typeof Symbol('fn');    // symbol
typeof 2423424n;    // bigint
typeof function() {};   // function
typeof [];  // object
typeof {};  // object
typeof null;    // object
typeof /^abc/; // object
```

### instanceof

通过原型链，判断能否找到该类型的原型。

```js
let str = 'name'; // 字面量
str instanceof String; // false


let str2 = new String('name');
str2 instanceof String; // true


let arr = [];
arr instanceof Array; // true
arr instanceof Object; // true


function fn() {};
let cb = new fn();  // 经过构造，已经是个对象，不是函数
cb instanceof fn;   // true
cb instanceof Function; // false
cb instanceof Object; // true
fn instanceof Function; // true
cb.__proto__ === fn.prototype;  // true


class People {}
class Student extends People {}
const john = new Student();
john instanceof Student; // true, 实例john顺着原型链能找到 Student.prototype 和 People.prototype
john instanceof People; // true

```

### Object.prototype.toString.call()

所有原始数据类型都能判断。

```js
Object.prototype.toString.call(undefined);  // '[object Undefined]'
Object.prototype.toString.call(2);  // '[object Number]'
Object.prototype.toString.call('2');  // '[object String]'
Object.prototype.toString.call(true);  // '[object Boolean]'
Object.prototype.toString.call(Symbol('fn'));  // '[object Symbol]'
Object.prototype.toString.call(234342324n);  // '[object BigInt]'
Object.prototype.toString.call(function() {});  // '[object Function]'
Object.prototype.toString.call({});  // '[object Object]'
Object.prototype.toString.call([]);  // '[object Array]'
Object.prototype.toString.call(null);  // '[object Null]'
Object.prototype.toString.call(new Date());  // '[object Date]'
Object.prototype.toString.call(new RegExp(/name/));  // '[object RegExp]'
Object.prototype.toString.call(/^abc/); // '[object RegExp]'
```

### 判断是否是数组

```js
Array.isArray([]); // true
[] instanceof Array; // true
Object.prototype.toString.call([]); // '[object Array]'
```

特殊的：
```js
let arr = [];
let arr2 = Object.create(arr.constructor.prototype); // 创造了个干净的arr2，且继承 arr的原型对象即 Array.prototype。
Array.isArray(arr); // true
Array.isArray(arr2); // false
arr2 instanceof Array;  // true，因为继承了 arr的原型对象即 Array.prototype
Object.prototype.toString.call(arr); // '[object Array]'
Object.prototype.toString.call(arr2); // '[object Object]'
arr2.push(1); // 正常，因为继承了 arr的原型对象即 Array.prototype，拥有Array原型上的方法
```