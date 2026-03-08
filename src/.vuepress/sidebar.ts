import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/law/": [
    {
      text: "宪法",
      prefix: "宪法/",
    },
    {
      text: "法律",
      prefix: "法律/",
    },
  ],
  "/about/": "structure",
  "/": false,
});
