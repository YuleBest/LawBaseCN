import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "所有条目",
    icon: "book",
    prefix: "/law/",
    link: "/law/",
  },
  {
    text: "宪法",
    icon: "material-symbols-light:book",
    link: "/law/中华人民共和国宪法",
    prefix: "/law/中华人民共和国宪法",
  },
  "about",
]);
