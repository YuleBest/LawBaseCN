import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    icon: "line-md:home-twotone",
    link: "/",
  },
  "nav",
  {
    text: "分类",
    icon: "streamline-flex:search-category-remix",
    children: [
      {
        text: "宪法",
        link: "/category/宪法/",
      },
      {
        text: "民法商法",
        link: "/category/民法商法/",
      },
      {
        text: "宪法相关法",
        link: "/category/宪法相关法/",
      },
      {
        text: "刑法",
        link: "/category/刑法/",
      },
      {
        text: "社会法",
        link: "/category/社会法/",
      },
    ],
  },

  {
    text: "标签",
    icon: "solar:tag-bold",
    link: "/tag/",
  },

  {
    text: "时间轴",
    icon: "mingcute:time-fill",
    link: "/timeline/",
  },

  "about/",
]);
