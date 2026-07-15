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

`/blog` 页面目前聚合两个独立维护的专题仓库：

- [C 博客](https://codeideaai.github.io/c/)
- [iOS 博客](https://codeideaai.github.io/ios/)

入口信息统一配置在 `src/consts.ts` 的 `BLOG_REPOSITORIES` 中，并同时用于博客页面和 RSS。

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

## 常用命令

| 命令 | 用途 |
| --- | --- |
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建生产版本 |
| `pnpm preview` | 预览生产构建 |
| `pnpm astro --help` | 查看 Astro CLI 帮助 |
