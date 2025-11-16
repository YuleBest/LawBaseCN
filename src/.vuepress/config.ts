import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "LawBaseCN",
  description: "中国法律法规数据库",

  markdown: {
    toc: {
      level: [2, 3, 4],
    },
  },

  theme,
});
