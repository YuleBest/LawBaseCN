import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "所有条目",
      icon: "book",
      prefix: "law/",
      link: "law/",
      children: [
        "中华人民共和国宪法",
        {
          text: "宪法相关法",
          prefix: "宪法相关法/",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    "about",
  ],
});
