export default [
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
    ],
  },
]