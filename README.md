# CodeIdea AI Blog

基于 [Astro](https://astro.build/) 的个人技术博客，支持 Markdown、MDX、RSS、站点地图和响应式页面。

## 本地开发

需要 Node.js 22.12 或更高版本。

```sh
pnpm install
pnpm dev
```

开发服务器默认运行在 `http://localhost:4321`。

## 博客专题

`/blog` 页面目前聚合以下独立维护的博客与学习笔记：

- [C 博客](https://codeideaai.github.io/c/)
- [iOS 博客](https://codeideaai.github.io/ios/)
- [React 博客](https://codeideaai.github.io/react/)
- [Linux 黑客基础笔记](https://codeideaai.github.io/linux-basics-for-hackers-notes/)

本站还维护中文专栏「边刷 LeetCode，边学 Python 语法」。可直接阅读 [专栏导读](src/pages/leetcode-python/index.md)、[第 01 篇 · 两数之和](src/pages/leetcode-python/01-two-sum.md)、[第 02 篇 · 存在重复元素](src/pages/leetcode-python/02-contains-duplicate.md)、[第 03 篇 · 有效的字母异位词](src/pages/leetcode-python/03-valid-anagram.md)和 [第 04 篇 · 有效的括号](src/pages/leetcode-python/04-valid-parentheses.md)。本地构建后的专栏路径为 `/leetcode-python/`。

入口信息统一配置在 `src/consts.ts` 的 `BLOG_REPOSITORIES` 中，并同时用于首页、博客页面和 RSS。

## 构建

```sh
pnpm build
pnpm preview
```

部署时请通过 `SITE_URL` 指定正式域名，以生成正确的 canonical URL 和站点地图：

```sh
SITE_URL=https://blog.example.com pnpm build
```

构建产物位于 `dist/`。

## 访问统计

正式站点通过 [Vercount](https://vercount.one/) 统计全站访问量和访客数，并在页脚展示。统计脚本仅在 `codeideaai.github.io` 的生产构建中启用，本地开发不会产生统计数据。

## 常用命令

| 命令 | 用途 |
| --- | --- |
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建生产版本 |
| `pnpm preview` | 预览生产构建 |
| `pnpm astro --help` | 查看 Astro CLI 帮助 |
