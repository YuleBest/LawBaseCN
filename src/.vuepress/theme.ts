import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { titlePlugin } from "vuepress/markdown";

export default hopeTheme({
  hostname: "https://lawbase.cn.yule.ink/",

  // 站点图标和 LOGO
  favicon: "/image/favicon.png",
  logo: "/image/logo_light.png",
  logoDark: "/image/logo_dark.png",

  // 页面信息
  pageInfo: ["Category", "Author", "Date", "Tag"],

  // “编辑此页”配置
  repo: "YuleBest/LawBaseCN",
  docsDir: "src",
  editLink: true,

  // 更新日志
  changelog: false, // 请保持关闭（因为会占用一个标题放置）

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

  // 纯净模式（关闭特效）
  pure: false,

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
    docsearch: {
      appId: "WVBQJCLHI3",
      apiKey: "3703b4257f0b33a1e78550da572e926c",
      indices: ["LawBaseCN"],
      placeholder: "搜索条目",
    },

    // 目录页面配置
    catalog: {},

    // PWA 配置
    pwa: {
      // 缓存策略
      cacheHTML: true, // 缓存 ALL HTML 文件
      cacheImage: true, // 缓存图片

      update: "hint", // 提示用户更新
      // base 自动附加
      appendBase: true,

      manifest: {
        name: "LawBaseCN",
        start_url: "/",

        icons: [
          {
            src: "/image/logo_light.png",
            sizes: "867x871",
            type: "image/png",
          },
          {
            src: "/image/logo_dark.png",
            sizes: "1737x1750",
            type: "image/png",
          },
        ],
      },
    },
  },
});
