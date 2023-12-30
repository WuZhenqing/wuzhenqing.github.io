import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "魔法禁书目录",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
