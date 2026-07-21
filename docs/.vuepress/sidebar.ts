import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "/",
    {
      text: '测试',
      prefix: 'test/',
      children: [
        {text: '测试', link: 'test.md'}
      ],
    }
  ],
});
