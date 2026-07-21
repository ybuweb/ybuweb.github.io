import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  // 站点配置
  hostname: "https://ybuweb.github.io",
  repo: "ybuweb/ybuweb.github.io",
  docsDir: "docs",
  favicon: 'logo.jpg',

  // 主页配置
  logo: "logo.jpg",

  // 文章默认作者配置
  author: {
    name: "YBUWeb",
    url: "https://github.com/ybuweb/",
    email: "ybuweb@126.com",
  },

  // 页面元数据
  pageInfo: ["Author", "Date", "Word", "Category", "Tag", "ReadingTime"], // 页面元信息
  metaLocales: {editLink: "在 GitHub 上编辑此页"}, // "编辑此页"显示的字符串

  // 导航栏侧边栏
  navbar,
  sidebar,

  // 页脚
  footer: "",
  displayFooter: true,
  license: 'GPL-v3.0',

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 主题 Markdown 选项
  markdown: {
    // Markdown扩展支持
    gfm: true, // GitHub Flavored Markdown, 需要 mathjax-full 来支持tex格式
    alert: true, // github风格的警告容器
    mark: true, // 荧光笔标记 ==xxx==
    sup: true, // 上角标 ^xxx^ 
    sub: true, // 下角标 ~xxx~
    spoiler: true, // 剧透 !!xxx!!
    include: true, // 导入文件

    // 图片支持
    figure: true, // 图片描述
    imgLazyload: true, // 懒加载
    imgMark: true, // 支持黑白主题不同图片
    imgSize: true, // 尺寸

    // 代码案例支持
    demo: true,

    // 代码块渲染器支持
    highlighter: {
      collapsedLines: 8 // 8行以上折叠
    },

    // 组件支持
    component: true,

    // 选项卡功能支持
    tabs: true,
    codeTabs: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    components: {
      // 启用组件
      components: ["VPCard", "BiliBili", "Badge", "Share"],
      componentOptions: {
        // share组件配置
        share: {services: ['qq', 'weibo', 'facebook', 'twitter', 'reddit', 'pinterest', 'snapchat', 'tumblr', 'telegram', 'whatsapp', 'line', 'linkedin', 'douban', 'buffer', 'wordpress', 'flipboard', 'evernote', 'qrcode', 'email', 'messenger', 'sms']}
      }
    },

    icon: {
      prefix: "fa6-solid:",
    },
  },
});
