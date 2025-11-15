import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "所有条目",
      icon: "book",
      prefix: "law/",
      link: "law/",
      children: "structure",
    },
    "about",
  ],
});
