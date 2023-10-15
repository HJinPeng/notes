# 模块化
 
把复杂的代码按功能划分成不同的模块单独维护，可以提高代码可读性、降低维护成本。

## CommonJS

Node.js 就是 CommonJS 规范的主要实践者。  

一个文件就是一个模块，以同步模式在运行时加载模块。在服务端模块文件都在本地，速度快，但在浏览器会出现大量同步请求，效率低。

它有4个重要的环境变量：`module`, `exports`, `require`, `global`。

用 `module.exports` 导出当前模块的数据，用 `require` 加载其他模块。

```js
// 定义模块math.js
let basicNum = 0;
function add(a, b) {
    return a + b;
}

//在这里写上需要向外暴露的函数、变量
module.exports = { 
    add,
    basicNum,
}
```

```js
// 引用自定义的模块
var math = require('./math');
math.add(2, 5);
```

## AMD

采用异步方式加载模块。所有依赖某模块的语句，都定义在一个回调函数中，待模块加载完成回调才会执行.  

require.js 使用了 AMD 规范。  

```js
// 首先用config()指定各模块路径和引用名
require.config({
    baseUrl: "js/lib",
    paths: {
        "jquery": "jquery.min",  //实际路径为js/lib/jquery.min.js
        "underscore": "underscore.min",
    }
});

// 引用模块，将模块放在[]内
require(["jquery","underscore"],function($,_){
    // some code here
});

// 定义math.js模块
define(function () {
    var basicNum = 0;
    var add = function (x, y) {
        return x + y;
    };
    return {
        add,
        basicNum
    };
});

// 定义一个依赖underscore.js的模块
define(['underscore'],function(_) {
    var classify = function(list) {
        _.countBy(list, function(num) {
            return num > 30 ? 'old' : 'young';
        })
    };
    return {
        classify
    };
})

// 依赖前置，提前执行
define(["a", "b", "c", "d", "e", "f"], function(a, b, c, d, e, f) { 
    a.doSomething();
    if (false) {
        // 即便没用到某个模块 b，但 b 还是提前执行了
        b.doSomething()
    } 
});
```

## CMD

AMD推崇**依赖前置，提前执行**。

CMD推崇**依赖就近，延迟执行**。CMD 规范在 `sea.js` 推广中产生。  

```js
// 定义模块 math.js
define(function(require, exports, module) {
    var a = require('./a'); //在需要时申明
    a.doSomething();
    if (false) {
        var b = require('./b');
        b.doSomething();
    }
    var add = function(a, b) {
        return a + b;
    }
    exports.add = add;
});
```

```js
// 加载模块
seajs.use(['math.js'], function(math) {
    var sum = math.add(1,2);
});
```


## ES Modules

在ES6语言标准上实现的模块化。在静态编译阶段就确定了模块的依赖关系。通过 `export` 向外暴露模块数据，通过 `import` 引用模块。

**导出**：

```js
/* 一、单个导出 */
export function add() {}
export const count = 1;

/* 二、合并导出 */
function add() {}
const count = 1;
export {
    add,
    count as times, // 别名
    // version: 1, // 会报错！这里export的不是一个对象，而是导出语句，导出语句的语法要求属性名必须是有效的标识符，不能直接将一个具有初始值的属性导出
}

/* 三、默认导出 */
// 默认导出，导出一个对象
export default {
    version: 1
}

// 默认导出一个函数
export default function getVal() {}

// 默认导出一个数组
const arr = [];
export default arr;
```

**导入**

```js
/* 一、导入 单个、合并导出的模块 */
// 1. 方式1
import { add, count } from './test'
// 2. 方式2，将所有导出用变量test接收
import * as test from './test'

/* 二、导入 默认导出的模块 */
// 1. 方式1
import test from './test'
// 2. 方式2
import { default as test } from './test'

/* 三、导入 不需要导出的模块 */
import './test'

/* 四、动态导入 */
import('./test').then(module => {})
```


## CommonJS 和 ES Modules的区别

1. CommonJS 在运行时加载模块，ES Modules在静态编译阶段时加载模块。
2. CommonJS 导出的是值拷贝，ES Modules 导出的是一个引用，后续的改动会影响到其他导入的地方。
3. CommonJS 加载的是整个模块，ES Modules 可以加载模块的部分接口
4. CommonJS 不会提升 `require`，ES Modules 会提升 `import` 到顶部