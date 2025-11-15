import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "LawBaseCN V0.0.1-beta",
  description: "中国法律知识库",

  theme,
});
