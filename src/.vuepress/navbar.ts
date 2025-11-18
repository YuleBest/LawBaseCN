import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "条目导航",
    prefix: "/law/nav",
    link: "/law/nav",
    icon: "line-md:my-location-loop",
  },
  "about/",
]);
