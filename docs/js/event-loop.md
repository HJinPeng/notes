# 消息队列 & 事件循环

## 消息队列

消息队列是一种数据结构，存放要执行的任务，符合”先进先出“的特点。  

消息队列中的任务类型：  
- 渲染事件（如解析DOM，计算布局，绘制）
- Js脚本执行事件
- 用户交互事件
- 网络请求完成，文件读写事件  
 
![消息队列](/assets/img/js/event-loop-1.png)

## 延迟队列

这个队列维护了需要延迟执行的任务列表，如定时器，渲染进程会将该定时器的回调任务添加到延迟队列中

## 宏任务

`setTimeout` `setInterval` `I/0` 事件

## 微任务

`Promise.then` `Promise.catch` `Promise.finally`，`await`, node中的`process.nextTick`  

**为什么需要微任务？**

比宏任务更高的优先级，可以在下一个宏任务之前执行关键的操作，快速响应异步操作（如Promise的状态变化），提供更好的用户体验。

## 事件循环

（简单的讲）从消息队列中取出一个任务，执行任务，检查延迟任务队列里面的任务，将到期的任务放到延迟执行队列中，执行延迟执行队列里的任务，开始下一次循环。  

（结合宏任务和微任务）从宏任务队列中取出一个宏任务并执行，遇到宏任务则添加到宏任务队列，遇到微任务则添加到微任务队列，当执行栈为空后，依次执行微任务队列中的所有任务，直到微任务队列为空，再从宏任务队列中取出一个新的宏任务执行。（微任务总是在下一个宏任务之前执行）

![事件循环](/assets/img/js/event-loop-2.png)

## 输出结果判断

1. 题目1

```js
async function fn1(){
    return 123
}

function fn2(){
    return 123
}

console.log(fn1())
console.log(fn2())
```

**结果：**

```
Promise {<resolved>: 123}
123
```

2. 题目2

```js
setTimeout(() => console.log('setTimeout1'), 0);  //1宏任务
setTimeout(() => {                              //2宏任务
    console.log('setTimeout2');
    Promise.resolve().then(() => {
        console.log('promise2');
        Promise.resolve().then(() => {
            console.log('promise3');
        })
        console.log(5)
    })
    setTimeout(() => console.log('setTimeout4'), 0);  //4宏任务
}, 0);
setTimeout(() => console.log('setTimeout3'), 0);  //3宏任务
Promise.resolve().then(() => {//1微任务
    console.log('promise1');
})
```

**结果：**

```
promise1
setTimeout1
setTimeout2
promise2
5
promise3
setTimeout3
setTimeout4
```

3. 题目3

```js
async function async1() {
    console.log( 'async1 start' )
    await async2()
    console.log( 'async1 end' )
}
async function async2() {
    console.log( 'async2' )
}
async1()
console.log( 'script start' )
```

**结果：**

```
async1 start
async2
script start
async1 end
```

4. 题目4

```js
async function async1() {
    console.log( 'async1 start' ) //2
    await async2()
    console.log( 'async1 end' )//6
}
async function async2() {
    console.log( 'async2' )//3
}
console.log( 'script start' ) //1
setTimeout( function () {
    console.log( 'setTimeout' )//8
}, 0 )
async1();
new Promise( function ( resolve ) {
    console.log( 'promise1' )//4
    resolve();
} ).then( function () {
    console.log( 'promise2' ) //7
} )
console.log( 'script end' )//5
```

**结果：**

```
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
```

5. 练习题5

```js
new Promise( ( resolve, reject ) => {
        console.log( "promise1" )
        resolve()
    } )
    .then( () => {
        console.log( 1 )
    } )
    .then( () => {
        console.log( 2 )
    } )
    .then( () => {
        console.log( 3 )
    } )

new Promise( ( resolve, reject ) => {
        console.log( "promise2" )
        resolve()
    } )
    .then( () => {
        console.log( 4 )
    } )
    .then( () => {
        console.log( 5 )
    } )
    .then( () => {
        console.log( 6 )
    } )
```

**结果：**

```
promise1
promise2
1
4
2
5
3
6
```

6. 练习题6

```js
async function t1 () {
  console.log(1)
  console.log(2)
  await Promise.resolve().then(() => console.log('t1p'))
  console.log(3)
  console.log(4)
}

async function t2() {
  console.log(5)
  console.log(6)
  await Promise.resolve().then(() => console.log('t2p'))
  console.log(7)
  console.log(8)
}

t1()
t2()

console.log('end')
```

**结果：**

```
1
2
5
6
end
t1p
t2p
3
4
7
8
```

7. 练习题7

```js
async function t1 () {
  console.log(1)
  console.log(2)
  await new Promise(resolve => {
    console.log(0);
    setTimeout(() => {
      console.log('t1p')
      resolve()
    }, 1000)
  })
  console.log(9)
  await console.log(3)
  console.log(4)
}

async function t2() {
  console.log(5)
  console.log(6)
  await Promise.resolve().then(() => console.log('t2p'))
  console.log(7)
  console.log(8)
}

t1()
t2()

console.log('end')
```

**结果：**

```
1
2
0
5
6
end
t2p
7
8
t1p
9
3
4
```