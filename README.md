# 豆瓣用户备份

仅支持备份公开标记的已读图书。

线上环境：[https://douban-republic.github.io/archive/](https://douban-republic.github.io/archive/)

## 本地搭建

**依赖**

* `node` >= 12

**运行**

```bash
npm install
npm run serve
```

Running at [http://localhost:8080](http://localhost:8080)

## 本地备份
1. 在`/src/constant/users.ts`中，按添加用户ID和名称；
2. 访问 [http://localhost:8080](http://localhost:8080) ；
3. 从已添加的用户名称进入个人页面，点击进入 > 重新备份 页面；
4. 点击 「获取数据」按钮，并等待；获取时间依照数据量而定，最大可获取条目数量为2000条；
5. 等待获取完成后，点击「保存文件」按钮，浏览器将弹出对话框；
6. 请将文件保存在 `/public` 文件夹下，注意**不要重命名该文件**；
7. `npm run build` 或 直接复制该文件到 `/docs` 文件夹下；
8. `git` 提交你的备份文件。

## Tech

Vue / TypeScript / Vuex
