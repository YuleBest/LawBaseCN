import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://lawbase.cn.yule.ink/",

  // 站点图标和 LOGO
  favicon: "/image/favicon.png",
  logo: "/image/logo_light.png",
  logoDark: "/image/logo_dark.png",

  pageInfo: ["Category", "Author", "Date", "Tag"],

  repo: "YuleBest/LawBaseCN",

  docsDir: "src",

  editLink: true,

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer:
    "依据《著作权法》第五条，本网站收录的法律法规及规范性文件不受著作权保护，您可自由查阅引用，本网站不承担使用风险",
  copyright: false,
  displayFooter: true,

  // 多语言配置
  metaLocales: {
    editLink: "编辑此页",
  },

  // 实时查看任何改变。注: 这对更新性能有很大负面影响
  // hotReload: true,

  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: false,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },

  // 插件
  plugins: {
    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },

    // 搜索功能配置
    search: {
      maxSuggestions: 10,

      locales: {
        "/": {
          placeholder: "搜索条目",
        },
      },
    },
  },
});
