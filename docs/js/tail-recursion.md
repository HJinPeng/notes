# 尾调用 & 尾递归

## 尾调用

函数的最后一步操作是调用一个函数，就是尾调用。 

ES6的尾调用优化只在严格模式下开启，正常模式是无效的。 

### 示例

尾调用如下：

```js
function f(x) {
    return g(x);
}

// 函数m和n都属于尾调用，因为它们都是函数fn的最后一步操作
function fn(x) {
  if (x > 0) {
    return m(x)
  }
  return n(x);
}
``` 

下面不属于尾调用：

```js
// 情况一：调用函数g之后，还有别的操作，所以不属于尾调用
function f(x){
  let y = g(x);
  return y;
}

// 情况二：调用后还有操作
function f(x){
  return g(x) + 1;
}

// 情况三：同上
function f(x) {
    g(x);  // 等价于 g(x); return undefined;
}
```

::: warning
注意：只有不在用到外层函数的内部变量，内部函数的调用帧才会取代外部函数的调用帧，否则就无法进行"尾调用优化"
:::

## 尾递归

尾递归是一种编译器或解释器级别的优化技术。当一个函数在递归调用的最后一个操作是调用自身时，编译器可以优化只保留一个栈帧，可以避免递归栈溢出。  

### 阶乘

**普通写法：**

```js
function factorial(n) {
    if(n === 1) return 1;
    return n * factorial(n - 1);
}

factorial(5);   // 120
```

**尾递归写法：**

```js
function factorial(n, total) {
    if(n === 1) return total;
    return factorial(n - 1, n * total);
}

factorial(5,1); // 120
```

**优化写法：**

1. 在尾递归函数外，再提供一个正常形式的函数

```js
function tailFactorial(n, total) {
    if(n === 1) return total;
    return tailFactorial(n - 1, n * total);
}

function factorial(n) {
    return tailFactorial(n, 1)
}

factorial(5);
```

2. 采用默认值

```js
function factorial(n, total = 1) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(5);  //120
```

### 斐波那契

F[n]=F[n-1]+F[n-2] ，其中 F[0]=1,F[1]=1  

1 1 2 3 5 8 13 ....

**普通写法：**

```js
function Fibonacci(n) {
    if(n <= 1) {
        return 1;
    }
    return Fibonacci(n - 1) + Fibonacci(n - 2)
}

Fibonacci(10);      // 89
Fibonacci(100);     // 栈溢出
Fibonacci(500);     // 栈溢出
```

**尾递归写法：**

```js
// 每次 n-1，同时将 ac2 的值更新为 ac1+ac2 ，可以得到下一个斐波那契数。
function Fibonacci(n, ac1 = 1, ac2 = 1) {
    if(n <= 1) {
        return ac2;
    }
    return Fibonacci(n - 1, ac2 , ac1 + ac2)
}

Fibonacci(100);     // 57314..........
Fibonacci(1000);    // 7.03...e+208
Fibonacci(10000);   // Infinity
```
