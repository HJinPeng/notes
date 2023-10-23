export default [
  {
    title: "JavaScript", // 必要的
    path: "", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 1, // 可选的, 默认值是 1
    children: [
      {
        title: "执行上下文",
        path: "execution-context",
      },
      {
        title: "改变执行上下文",
        path: "call-apply-bind",
      },
      {
        title: "闭包",
        path: "closure",
      },
      {
        title: "作用域&作用域链",
        path: "scope-chain",
      },
      {
        title: "原型&原型链",
        path: "prototype-chain",
      },
      {
        title: "继承",
        path: "extend",
      },
      {
        title: "事件循环机制",
        path: "event-loop",
      },
      {
        title: "模块化",
        path: "module",
      },
      {
        title: "变量数据类型、存储、判断",
        path: "variable",
      },
      {
        title: "浮点数相加问题",
        path: "float-add",
      },
      {
        title: "装箱 & 拆箱",
        path: "boxing-unboxing",
      },
      {
        title: "尾递归",
        path: "tail-recursion",
      },
      {
        title: "数组方法",
        path: "array-method",
      },
      {
        title: "数组的sort()",
        path: "array-sort",
      },
      {
        title: "类数组",
        path: "array-like",
      },
    ],
  },
  {
    title: "手写",
    path: "",
    collapsable: false,
    sidebarDepth: 1,
    children: [
      {
        title: "防抖",
        path: "write-js/debounce",
      },
      {
        title: "节流",
        path: "write-js/throttle",
      },
      {
        title: "深拷贝 & 浅拷贝",
        path: "write-js/clone",
      },
      {
        title: "手写Object.create",
        path: "write-js/object-create",
      },
      {
        title: "手写new",
        path: "write-js/new",
      },
      {
        title: "手写instanceof",
        path: "write-js/instanceof",
      },
      {
        title: "数组的reduce",
        path: "write-js/reduce",
      },
      {
        title: "数组的isArray",
        path: "write-js/isArray",
      },
      {
        title: "数组扁平化",
        path: "write-js/array-flat",
      },
      {
        title: "数组去重",
        path: "write-js/array-unique",
      },
    ],
  },
];
