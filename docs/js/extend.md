# 继承

## 组合继承

最常用的继承方式。通过在 子类构造函数 中调用 父类构造函数，继承父类的实例属性，再改变子类的原型为父类的实例，来继承父类的原型属性和方法。  

**优点**：引用类型不会共享  

**缺点**：调用了2次父类构造函数，会在子类的原型对象中上多了父类的实例属性，且子类生成的实例对象中也包括了父类的实例对象，导致子类实例中的同名方法和属性重写了原型对象中的方法和属性。

```js
// 父构造函数
function SuperType(name) {
    this.name = name;
    this.colors = ["red","blue","green"];
}

// 在父构造函数的原型上添加方法
SuperType.prototype.sayName = function() {
    alert(this.name);
}

// 子构造函数
function SubType(name, age) {
    // 继承父构造函数的实例属性
    SuperType.call(this,name);  // 第二次调用SuperType()
    this.age = age;
}

// 将父构造函数的实例对象 作为 子构造函数的原型对象（SubType.prototype 是 父构造函数的实例），所以子构造函数的实例根据原型链可以获得父构造函数的原型方法和属性
SubType.prototype = new SuperType();   // 第一次调用SuperType()

// 将子构造函数的原型对象的构造函数属性指向子构造函数构造函数
SubType.prototype.constructor = SubType;

// 在子构造函数的原型上添加方法
SubType.prototype.sayAge = function() {
    alert(this.age);
}

// 子构造函数实例1
var instance1 = new SubType("Nike", 28);
alert(instance1.name); 
instance1.colors.push("black");
alert(instance1.colors);  // "red","blue","green","black"  
instance1.sayName();  // "Nike"
instance1.sayAge();   // 28

// 子构造函数实例2
var instance2 = new SubType("Greg", 27);
alert(instance2.colors);  // "red","blue","green"
instance2.sayName();  //"Greg"
instance2.sayAge();   //27
```

## 寄生组合继承

解决了组合继承中二次调用父类构造函数的问题。这是更好的继承方式。

```js
// 父类
function Parent(value) {
    this.val = value;
}
// 在父类的原型上添加方法
Parent.prototype.getValue = function() {
    console.log(this.val);
}

// 子类
function Child(value) {
    // 继承父类的实例属性
    Parent.call(this, value);
}
// 修改子类的原型对象：生成一个干净的空对象，且继承父类的原型对象
Child.prototype = Object.create(Parent.prototype, {
    // 构造函数属性
    constructor: {
        value: Child,   // 将构造函数设置为子类
        enumerable: false,
        writable: true,
        configurable: true
    }
})

/*
    Object.create 在 es5 中实现如下：

    function create(obj, defineProperties) {
        function F() {}
        F.prototype = obj;
        if(defineProperties) {
            Object.defineProperties(obj, defineProperties)
        }
        return new F()
    }

*/ 

const child = new Child(26);

child.getValue(); // 26
child instanceof Child; // true
child instanceof Parent; // true
```

## 原型链继承

**缺点**：
1. 子构造函数的原型对象实际上是父构造函数的实例，于是父构造函数实例也就成为了子构造函数的原型属性，这对引用类型不友好。
2. 无法给父构造函数传递参数

```js
function SuperType() {
    this.property = true; 
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
}

function SubType() {
    this.subproperty = false; 
}

// 让子构造函数的原型对象等于父构造函数的实例（继承了SuperType）  
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
    return this.subproperty;
}

var instance = new SubType();
alert(instance.getSuperValue());   // true
```

## 构造函数继承

**缺点：** 父构造函数定义的原型方法和属性对子类不可见

```js
function SuperType(name) {
    this.name = name;
}

function SubType(name) {
    // 继承了SuperType
    SuperType.call(this,name);
    // 实例属性
    this.age = 29;
}

var instance = new SubType("Nike");
alert(instance.name);  // Nike
alert(instance.age);  // 29
```

## 原型式继承

**缺点：** 引用类型会被共享，子类无法向父类传参

```js
var person = {
    name: "Nike",
    friends: ["Mike","John"]
};

var anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = Object.create(person);
yetAnotherPerson.friends.push("Barries");

alert(person.friends); //"Mike","John","Rob","Barries"
```

## 寄生式继承

和 原型式继承 不一样的地方是，再包装了一下对象，对 对象进行增强再返回。但是**增强的函数在每个实例都会重新创建，无法函数复用**，降低了效率。

```js
function createAnother(original) {
    var clone = Object.create(original);  //通过调用函数来返回一个新对象
    clone.sayHi = function() {   //增强这个对象，即添加自己的方法，属性
        alert("Hi");
    }
    return clone;
}

var person = {
    name: "Hello",
    friends: ["Maike","KLoo"]
}

var anotherPerson = createAnother(person);
alert(anotherPerson.name); //Hello
anotherPerson.sayHi();  // Hi
```