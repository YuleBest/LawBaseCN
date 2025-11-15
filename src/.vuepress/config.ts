import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "LawBaseCN",
  description: "中国法律法规数据库",

  theme,
});
