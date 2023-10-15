# 类数组

## 定义

类数组是一个对象，和数组的特征类似。  
可通过下标获取值，具有 `length` 属性，可通过 for 循环进行遍历。 

```js
let arrayLike = {
	0: 1,
  	1: 2,
  	2: 3,
  	length: 3
}

for(let i = 0 ; i < arrayLike.length; i++ ) {
    console.log(i, arrayLike[i]);
}
```

::: tip
1. 获取dom节点的方法，`querySelectorAll()`，`getElementsByTagName()` 返回值就是一个类数组。
2. 在一个方法中使用 `arguments` 获取所有参数，也是一个类数组。
3. 类数组无法使用数组原型链上的方法, 如 `forEach`, `map` ...
:::

## 类数组 转 数组

```js
let arrayLike = {
	0: 1,
  	1: 2,
  	2: 3,
  	length: 3
}

// 方法1
Array.prototype.slice.call(arrayLike);

// 方法2
Array.from(arrayLike);

// 方法3，对于没有迭代器的类数组，需要将数组的迭代器对象取出来赋值给类数组的迭代器key。arrayLike[Symbol.iterator] = [][Symbol.iterator]
[...arrayLike]; 
```

## 数组 转 类数组

```js
let arrayLike = {
	0: 1,
  	1: 2,
  	2: 3,
  	length: 3
}

// 将数组的push方法应用在 arrayLike 对象上，并将arr作为参数传递给push，从而生成类数组
[].push.apply(arrayLike, arr); //{0: 1, 1: 2, 2: 3, length: 3}
```
