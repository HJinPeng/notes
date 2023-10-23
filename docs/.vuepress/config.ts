import { defineConfig } from "vuepress/config";
import nav from './source-map/nav'
import sidebar from "./source-map/sidebar";

export default defineConfig({
  dest: './dist',
  title: "三年磨一剑",
  description:
    "HTML | CSS | JavaScript | TypeScript | Vue | React | Node | 计算机网络 | 数据结构 | 算法 | 部署 | 开源",
  head: [["link", { rel: "icon", href: "/assets/img/logo.ico" }]],
  themeConfig: {
    logo: "/assets/img/logo.png",
    nav,
    sidebar,
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
