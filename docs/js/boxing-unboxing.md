# 装箱 & 拆箱

当把一个“数据”从值类型转换成引用类型的时候，就叫做“装箱”，反之叫做“拆箱”。  

```js
let str = 'abc';
let newStr = str.substring(1); // 'bc'
```

`str` 可以调用 `substring` 是因为，在调用 `.substring()` 时，js自动创建了一个 `String` 类型的实例（装箱），再在实例上调用 `.substring()`。然后再调用 `.toString()` 方法（拆箱）得到值。  

::: tip
1. Number类型的值拆箱会优先使用 `valueOf()`，如果 `valueOf()` 不是基本类型，再调用 `toString()` 
2. String类型的值拆箱会优先使用 `toString()` ，如果 `toString()` 不是基本类型，再调用 `valueOf()`，如果值也不是基本类型，则报错。
3. JS 中拆箱时，更偏爱 Number，即用 `valueOf()`
:::