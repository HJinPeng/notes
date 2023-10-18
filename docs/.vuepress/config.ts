import { defineConfig } from "vuepress/config";

export default defineConfig({
  dest: './dist',
  title: "三年磨一剑",
  description:
    "HTML | CSS | JavaScript | TypeScript | Vue | React | Node | 计算机网络 | 数据结构 | 算法 | 部署 | 开源",
  head: [["link", { rel: "icon", href: "/assets/img/logo.ico" }]],
  themeConfig: {
    logo: "/assets/img/logo.png",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端",
        ariaLabel: "Frontend",
        items: [
          { text: "HTML", link: "/html/" },
          { text: "CSS", link: "/css/" },
          { text: "JavaScript", link: "/js/execution-context" },
          { text: "TypeScript", link: "/ts/" },
          { text: "Vue", link: "/vue/" },
        ],
      },
      { text: "Node", link: "/node/" },
      { text: "计算机网络", link: "/vue/" },
      {
        text: "数据结构",
        ariaLabel: "DataStructure",
        items: [
          { text: "栈", link: "/html/" },
          { text: "队列", link: "/css/" },
          { text: "链表", link: "/js/" },
          { text: "树", link: "/ts/" },
          { text: "图", link: "/vue/" },
        ],
      },
      { text: "算法", link: "/algorithm/" },
      {
        text: "其他",
        ariaLabel: "Osther",
        items: [
          { text: "浏览器", link: "/browser/process-thread" },
          { text: "部署", link: "/deploy/" },
          { text: "开源", link: "/open-source/" },
        ],
      },
    ],
    sidebar: {
      "/html/": [
        {
          title: "HTML", // 必要的
          path: "/html/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        },
      ],
      "/css/": [
        {
          title: "CSS", // 必要的
          path: "/css/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        },
      ],
      "/js/": [
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
              path: "array-method"
            },
            {
              title: "数组的sort()",
              path: "array-sort",
            },
            {
              title: "类数组",
              path: "array-like",
            }
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
              path: "write-js/object-create"
            },
            {
              title: "手写new",
              path: "write-js/new"
            },
            {
              title: "手写instanceof",
              path: "write-js/instanceof"
            },
            {
              title: "数组的reduce",
              path: "write-js/reduce"
            },
            {
              title: "数组的isArray",
              path: "write-js/isArray"
            },
            {
              title: "数组扁平化",
              path: "write-js/array-flat"
            },
            {
              title: "数组去重",
              path: "write-js/array-unique"
            }
          ],
        },
      ],
      "/ts/": [
        {
          title: "TypeScript",
          path: "/ts/",
        },
      ],
      "/vue/": [
        {
          title: "Vue",
          path: "/vue/",
        },
      ],
      "/node/": [
        {
          title: "Node",
          path: "/node/",
        },
      ],
      "/network/": [
        {
          title: "计算机网络",
          path: "/network/",
        },
      ],
      "/data-structure/": [
        {
          title: "数据结构", // 必要的
          path: "/data-structure/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            {
              title: "栈", // 必要的
              path: "stack", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            },
            {
              title: "队列", // 必要的
              path: "queue", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            },
          ],
        },
      ],
      "/algorithm/": [
        {
          title: "算法", // 必要的
          path: "/algorithm/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            {
              title: "链表", // 必要的
              path: "/algorithm/linked-list/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              // collapsable: false,
              children: [
                {
                  title: "双指针",
                  path: "/algorithm/linked-list/double-pointer",
                },
              ],
            },
            // {
            //   title: '树',   // 必要的
            //   path: 'tree',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            // }
          ],
        },
      ],
      "/browser/": [
        {
          title: "浏览器", // 必要的
          path: "", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            {
              title: "进程&线程",
              path: "process-thread",
            },
            {
              title: "DOM",
              path: "dom",
            },
            {
              title: "script标签的async、defer",
              path: "async-defer"
            }
          ],
        },
      ],
      "/deploy/": [
        {
          title: "部署",
          path: "/deploy/",
        },
      ],
      "/open-source/": [
        {
          title: "开源",
          path: "/open-source/",
        },
      ],
    },
    lastUpdated: "Last Updated",
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: "vuejs/vuepress",
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: "vuejs/vuepress",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: "帮助我们改善此页面！",
    smoothScroll: true,
  },
  markdown: {
    lineNumbers: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@docs": "docs",
      },
    },
  },
});
