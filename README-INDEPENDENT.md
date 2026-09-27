# Ascend C 学习工坊（独立版）

这是无需登录的独立网站版本。课程、测验、学习计划、模块完成状态和笔记都保存在访问者当前浏览器的 localStorage 中，不依赖 ChatGPT 身份、Cloudflare D1 或原 Sites 平台。

## 在 Vercel 发布

1. 将这个项目上传到自己的 GitHub 仓库。
2. 在 Vercel 中导入该仓库。
3. Framework 选择 Next.js，Build Command 使用 `npm run build`，Output 设置保持自动检测。
4. 点击 Deploy。Vercel 会生成一个公开的 `vercel.app` 地址。

上传到 GitHub 时要保留文件夹结构，尤其是 `app/`、`components/`、`hooks/`、`lib/`、`public/` 和 `vendor/`。不要只上传散落在根目录的文件；`app` 和 `vendor` 缺失都会导致构建失败。

本地预览需要 Node.js 22 或更高版本：

```bash
npm install
npm run dev
```

学习记录只保存在当前浏览器。跨设备同步需要另外接入独立的登录和数据库服务。
