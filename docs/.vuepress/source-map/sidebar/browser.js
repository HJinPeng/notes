export default [
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
        path: "async-defer",
      },
    ],
  },
]