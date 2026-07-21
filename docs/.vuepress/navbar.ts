import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: '测试',
    prefix: 'test/',
    children: [
      {text: '测试', link: 'test.md'}
    ]
  },
]);
