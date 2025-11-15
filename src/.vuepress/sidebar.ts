import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "所有条目",
      prefix: "law/",
      icon: "book",
      link: "law/",
      children: [
        "中华人民共和国宪法",
        {
          text: "宪法相关法",
          icon: "material-symbols:folder",
          prefix: "宪法相关法/",
          collapsible: true,
          children: [
            {
              text: "宪法历史版本",
              icon: "material-symbols:folder",
              prefix: "宪法历史版本/",
              collapsible: true,
              children: [
                "中国人民政治协商会议共同纲领（1949）",
                "中华人民共和国宪法（1954）",
                "中华人民共和国宪法（1975）",
                "中华人民共和国宪法（1978）",
              ],
            },

            {
              text: "宪法修正案",
              icon: "material-symbols:folder",
              prefix: "宪法修正案/",
              collapsible: true,
              children: [
                "中华人民共和国宪法修正案（1988）",
                "中华人民共和国宪法修正案（1993）",
                "中华人民共和国宪法修正案（1999）",
                "中华人民共和国宪法修正案（2004）",
                "中华人民共和国宪法修正案（2018）",
              ],
            },

            "中华人民共和国国籍法",
            "中华人民共和国国务院组织法",
            "中华人民共和国全国人民代表大会组织法",
          ],
        },
      ],
    },
    "",
    "about",
  ],
});
