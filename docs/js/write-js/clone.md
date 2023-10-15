# 深拷贝 & 浅拷贝

## 深拷贝

### 定义

将一个对象从内存中完整的拷贝一份，新旧对象不会互相影响。

### 实现

1. 手写深拷贝

```js
function deepClone(target, map = new WeakMap()) {
    if(isObject(target)) {
        // 循环引用，直接返回
        if(map.get(target)) {
            return map.get(target);
        }

        // 新对象，如果是Map或Set类型，则用这个对象的构造函数重新new一个，否则，用Object.create创建一个干净的对象，并设置原型为这个对象的构造函数的原型。
        let cloneTarget = getType(target, 'Map') || getType(target, 'Set') ? new target.constructor() : Object.create(target.constructor.prototype);
        
        // 将对象放在map中，便于后续处理循环引用 
        map.set(target, cloneTarget);

        // 克隆值
        if(getType(target, 'Map')) {
            target.forEach((val, key) => {
                cloneTarget.set(key, deepClone(val, map));
            })
        }else if(getType(target, 'Set')) {
            target.forEach(val => {
                cloneTarget.add(deepClone(val, map));
            })
        }else if(getType(target, 'Array')) {
            target.forEach(item => {
                cloneTarget.push(deepClone(item, map))
            })
        }else {
            Object.keys(target).forEach(key => {
                cloneTarget[key] = deepClone(target[key], map);
            })
        }
        
        // 返回克隆对象
        return cloneTarget;
    }else {
        return target;
    }
}

// 判断是否是需要遍历的引用类型：Array, Object, Map, Set
function isObject(target) {
    return typeof target === 'object' && target !== null;
}

// 获取类型
function getType(target, type) {
    return Object.prototype.toString.call(target) === `[object ${type}]`;
}
```

2. 使用 `JSON.parse(JSON.stringify(target))`  

`undefined`、`Symbol`、`Function` 不会被 stringify 序列化 => 丢失  

`NaN`、`Infinity` => null  

`RegExp`、`Error` => {}

`Date` 会调用 toJSON() =>  2022-10-09T01:57:30.845Z

```js
let obj1 = { 
    a: 1, 
    b: {c: [1]}, 
    d: undefined, 
    e: Symbol(), 
    f: function getName(){}, 
    g: NaN, 
    h: /^122$/, 
    i: new Date()
}

let obj2 = JSON.parse(JSON.stringify(obj1));
console.log(obj2);
/*
    {
        a: 1, 
        b: {c: [1]}, 
        g: null, 
        h: {}, 
        i: "2022-10-09T01:57:30.845Z"
    }
*/

```

## 浅拷贝

### 定义

创建一个新的对象，其属性值和原对象相同，只复制一层。如果属性是基本类型，则拷贝其值。如果属性是引用类型，则拷贝其内存地址，如果改变了引用类型的值，会同时影响新旧对象。

### 实现

1. `Object.assign()`

```js
// 对象
const obj1 = {
    name: 'xiaoming',
    hobby: ['swimming', 'sing']
};
const obj2 = Object.assign({}, obj1);

// 数组
const arr1 = [1, { a: 1 }];
const arr2 = Object.assign([], arr1);
```

2. 数组 `slice` 、 `concat` 、`Array.from()`

```js
const arr1 = [1];
const arr2 = arr1.slice(0);
const arr3 = [].concat(arr1)
const arr4 = Array.from(arr1);
```

3. 扩展运算符

```js
// 对象
const obj1 = {
    name: 'xiaoming',
    hobby: ['swimming', 'sing']
};
const obj2 = {...obj1};

// 数组
const arr1 = [1, { a: 1 }];
const arr2 = [...arr1];
```