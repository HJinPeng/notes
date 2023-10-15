# DOM

## 自定义数据属性

HTML5规定可以为元素添加非标准的属性，但要添加前缀 `data-` ，目的是为元素提供与渲染无关的信息，或者提供语义信息，这些属性可以任意添加，随便命名，只要是 `data-` 开头即可。

```html
<div id="myDiv" data-appId="12345" data-myName="Nike"></div>
```

可以通过元素的 `dataset` 属性来访问自定义属性的值，但不需要加 `data-` 前缀

```js
var myDiv = document.querySelector("#myDiv");

//获取自定义属性的值
var appId= myDiv.dataset.appId;
var myName= myDiv.dataset.myName;

// 设置值
myDiv.dataset.appId = 666;
```