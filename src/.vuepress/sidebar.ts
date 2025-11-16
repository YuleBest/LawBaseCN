import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      // /law/
      text: "所有条目",
      prefix: "law/",
      icon: "book",
      link: "law/",
      children: [
        // 宪法系列
        {
          text: "宪法系列",
          icon: "material-symbols:folder",
          prefix: "constitution/",
          collapsible: true,
          children: [
            "constitution",
            {
              text: "宪法相关法",
              icon: "material-symbols:folder",
              prefix: "relevant/",
              link: "relevant/",
              children: ["old-versions/", "amendment/"],
            },
          ],
        },

        // 民法商法
        {
          text: "民法商法",
          icon: "material-symbols:folder",
          prefix: "min-fa-shang-fa/",
          link: "min-fa-shang-fa/",
        },
      ],
    },

    {
      // /about/
      text: "关于本站",
      prefix: "about/",
      icon: "ix:about",
      link: "about/",
    },
  ],
});
