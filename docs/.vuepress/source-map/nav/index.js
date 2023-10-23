const nav = [
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
      { text: "tsup", link: "/tsup/" },
      { text: "Rollup", link: "/rollup/" },
    ],
  },
  {
    text: "后端",
    ariaLabel: "Backend",
    items: [
      { text: "Koa", link: "/backend/koa/" },
      { text: "鉴权", link: "/backend/auth/" },
    ],
  },
  { text: "计算机网络", link: "/network/http" },
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
    ariaLabel: "Other",
    items: [
      { text: "浏览器", link: "/browser/process-thread" },
      { text: "Git", link: "/git/" },
      { text: "部署", link: "/deploy/" },
      { text: "开源", link: "/open-source/" },
      { text: "疑难杂症", link: "/strange/mac-m1" },
    ],
  },
];
export default nav;
