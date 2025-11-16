import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "条目导航",
    prefix: "/law/",
    link: "/law/",
    icon: "line-md:my-location-loop",
  },
  "about/",
]);
