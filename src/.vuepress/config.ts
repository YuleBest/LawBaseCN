import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "LawBaseCN",
  description: "中国法律法规数据库",

  markdown: {
    toc: {
      level: [2, 3, 4, 5, 6, 7],
    },
  },

  cache: "./cache",

  shouldPrefetch: false,
  theme,

  bundler: viteBundler({
    viteOptions: {
      build: {
        sourcemap: false,
        cssCodeSplit: true,
        rollupOptions: {
          output: {
            chunkFileNames: "assets/js/[hash].js",
            entryFileNames: "assets/js/[hash].js",
            assetFileNames: "assets/[ext]/[hash].[ext]",
          },
        },
      },
    },
  }),
});
