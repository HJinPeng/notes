# 改变执行上下文：call、apply、bind

## 异同点
### 共同点

1. 三者都能够**改变函数执行时的上下文**。
2. 调用的对象，必须是一个**函数**。
3. **第一个参数**都是执行上下文对象。

### 不同点
1. `call` 和 `apply` 会**立即执行**函数，`bind` 则**返回一个函数**，需要稍后调用才执行函数。
2. `call` 的 `apply` 的传参，前者参数用**逗号**分隔，后者用一个**数组**或者**类数组**。
3. `bind` 生成的函数还可以继续接收参数。（类似函数柯理化）

## call

`Function.call(obj[,param1[,param2]])`

示例：
```js
function print (age, height) {
  console.log(this.name, age || 0, height || 0);
}
var obj = {
  name: '张三'
}
print.call(obj); // 张三 0 0
print.call(obj, 24, 173); // 张三 24 173
```

### 使用场景

1. 继承 
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Boy(name, age) {
  Person.call(this, name, age);
  this.sex = '男';
}

function Girl(name, age) {
  Person.call(this, name, age);
  this.sex = '女';
}

var a = new Boy('a', 5);
var b = new Girl('b', 40);
```

2. 方法借用

```js
let domNodes = Array.prototype.slice.call(document.getElementsByTagName("*"))

let arr = [];
Object.prototype.toString.call(arr); // '[Object Array]'
```


## apply

第二个参数必须是数组或者类数组，都会被转成**类数组**  
`Function.apply(obj[,argArray])`

```js
func.apply(obj, [1, 2, 3]); // func 接收到的参数是 1, 2, 3;

=>

func.apply(obj, {
    0: 1,
    1: 2,
    2: 3,
    length: 3
})
```


## bind

`bind` 方法能改变函数体内的 `this` 指向，但返回值是**函数**，并且需要**稍后调用**，才会执行。**bind()** 生成的函数还可以继续接收参数（类似函数柯理化）  
`Function.bind(obj[,param1[,param2]])()`  

示例：
```js
function print (age) {
  console.log(this.name, age || 0);
}
this.name = '李四';
let obj = {
  name: '张三'
}
print(); // 默认this指向window, 李四 0
print.bind(obj)(12); // 张三 12
print.bind(obj, 12)(); // 张三 12
```

### 使用场景

`bind` 函数设置默认参数

```js
function addFunc(arg1, arg2) {
    return arg1 + arg2;
}
let add = addFunc.bind(null, 1);
add(2); // 3

// 这里实现的功能类似函数柯理化
function curryFunc(arg1) {
    return function(arg2) {
        return arg1 + arg2;
    }
}
let curryAdd = curryFunc(1);
curryAdd(2);    // 3
```

## 手写call

实现：
```js
Function.prototype.myCall = function(context) {
    context = context || window;
    const args = [...arguments].slice(1);
    const fn = Symbol();
    // this 即为我们要调用的方法
    context[fn] = this;
    const result = context[fn](...args);
    // 手动删除fn属性
    delete context[fn];
    return result;
}
```

测试：
```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Boy(name, age) {
    Person.myCall(this, name, age);
    this.gender = 'boy';
}

let zhangsan = new Boy('zhangsan', 24);
console.log(zhangsan.name, zhangsan.age);
```

## 手写apply

实现：
```js
Function.prototype.myApply = function(context) {
    context = context || window;
    let result;
    const fn = Symbol();
    context[fn] = this;
    if(arguments[1]) {
        result = context[fn](...arguments[1])
    }else {
        result = context[fn]();
    }
    delete context[fn];
    return result;
}
```

## 手写bind

实现：
```js
Function.prototype.myBind = function(context) {
    const args = [...arguments].slice(1);
    const fn = this;
    return function Fn() {
      return fn.apply(
        this instanceof Fn ? this : context,
        args.concat(...arguments);
      )  
    }
}
```