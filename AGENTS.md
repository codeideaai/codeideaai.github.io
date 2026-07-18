## 开发

启动开发服务器时，请使用后台模式：

```
astro dev --background
```

使用 `astro dev stop`、`astro dev status` 和 `astro dev logs` 管理后台服务器。

## 文档

完整文档：https://docs.astro.build

处理相关任务前，请先查阅以下指南：

- [添加页面、动态路由或中间件](https://docs.astro.build/en/guides/routing/)
- [使用 Astro 组件](https://docs.astro.build/en/basics/astro-components/)
- [使用 React、Vue、Svelte 或其他框架组件](https://docs.astro.build/en/guides/framework-components/)
- [添加或管理内容](https://docs.astro.build/en/guides/content-collections/)
- [添加样式或使用 Tailwind](https://docs.astro.build/en/guides/styling/)
- [支持多语言](https://docs.astro.build/en/guides/internationalization/)

## Git 推送安全

- 推送代码前，必须检查本次提交和待推送的 Git 历史中是否包含敏感数据；确认不存在敏感数据后才能推送。
- 敏感数据包括但不限于：密码、API Key、访问令牌、私钥、证书、Cookie、数据库连接字符串、个人身份信息以及包含真实凭据的 `.env` 文件。
- 如果发现敏感数据，应立即停止推送，先删除或替换相关内容，并确认敏感信息已从待推送的 Git 历史中移除。
- 不得在日志、提交信息或检查结果中完整输出敏感数据；需要说明问题时只显示脱敏后的内容。
