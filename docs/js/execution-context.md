# 执行上下文

## 变量提升、函数提升

变量提升
```js
var foo = function () {
    console.log('foo1');
}
foo();  // foo1

var foo = function () {
    console.log('foo2');
}
foo(); // foo2
```

函数提升
```js
function foo() {
    console.log('foo1');
}
foo();  // foo2

function foo() {
    console.log('foo2');
}
foo(); // foo2
```

## 可执行代码

js 的可执行代码的类型有三种：
1. 全局代码
2. 函数代码
3. eval代码

当执行到一个函数时，会进行 准备工作（执行上下文）。

## 执行上下文

```js
function fun3() {
    console.log('3-1')  // 4
    console.log('fun3')   // 5
    console.log('3-2')  // 6
}

function fun2() {
    console.log('2-1')  // 3
    fun3();
    console.log('2-2') // 7
}

function fun1() {
    console.log('1-1') // 2
    fun2();
    console.log('1-2') // 8
}
console.log('0-1')  // 1
fun1();
console.log('0-2'); // 9
```  

当执行一个函数时，就会创建一个执行上下文，并压入 **执行上下文栈**。当函数执行完毕，才会将函数的执行上下文从栈中弹出。  

```js
// fun1
ECStack.push(<fun1> functionContext);

// fun1 调用了 fun2
ECStack.push(<fun2> functionContext);

// fun2 调用了 fun3
ECStack.push(<fun3> functionContext);

// fun3 执行完毕
ECStack.pop()

// fun2执行完毕
ECStack.pop();

// fun1执行完毕
ECStack.pop();

// javascript接着执行下面的代码，但是ECStack底层永远有个globalContext
```