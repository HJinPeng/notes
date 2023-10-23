export default [
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
]