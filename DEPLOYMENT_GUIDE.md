# 🚀 部署指南 - Cloudflare Workers

本指南说明如何将项目部署到 Cloudflare Workers。

---

## 📋 前置条件

- ✅ Cloudflare 账户 (免费或付费)
- ✅ `wrangler` CLI 已安装
- ✅ `pnpm` 包管理器已安装

---

## 🔧 安装 Wrangler

### 方式1: 使用 npm (推荐)
```bash
npm install -g wrangler
```

### 方式2: 使用 pnpm
```bash
pnpm add -D wrangler
```

验证安装:
```bash
wrangler --version
```

---

## 🔑 身份验证

首次部署前需要登录 Cloudflare:

```bash
wrangler login
```

这会打开浏览器窗口，要求您授权 Wrangler。

---

## 📦 构建和部署

### 命令

```bash
# 只构建 (不部署)
pnpm run build

# 构建并部署到 Cloudflare Workers
pnpm run deploy

# 本地测试 (在部署前)
pnpm run preview
```

### 完整流程

```bash
# 1. 安装依赖
pnpm install

# 2. 本地测试
pnpm run dev

# 3. 构建
pnpm run build

# 4. 本地预览构建结果
pnpm run preview

# 5. 部署到 Cloudflare
pnpm run deploy
```

---

## ⚙️ 配置说明

### `wrangler.jsonc`

关键配置项:

```jsonc
{
  "name": "chedao-shanqian",           // Workers 项目名称
  "type": "javascript",                // 项目类型
  "compatibility_date": "2026-06-10",  // Cloudflare API 版本
  "assets": {
    "directory": "dist",               // 静态文件目录
    "not_found_handling": "single-page-application"  // SPA 路由配置
  },
  "compatibility_flags": [
    "nodejs_compat"                    // 启用 Node.js 兼容性
  ],
  "build": {
    "command": "pnpm run build",       // 构建命令
    "cwd": "./"                        // 工作目录
  }
}
```

### `vite.config.ts`

关键配置项:

```typescript
export default defineConfig({
  plugins: [
    react(),                           // React 插件
    tsconfigPaths()                    // TypeScript 路径别名
  ],
});
```

**重要**: `plugins` 必须是静态数组，不能是函数返回值 (Wrangler 要求)

---

## 🚨 常见问题

### Q: 部署失败: "Cannot modify Vite config: could not find a valid plugins array"
**A**: 确保 `vite.config.ts` 中的 `plugins` 是静态数组声明:
```typescript
// ✅ 正确
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});

// ❌ 错误
export default defineConfig({
  plugins: getPlugins(), // 函数不行!
});
```

### Q: 本地运行正常，但部署后 404 错误
**A**: 检查 `wrangler.jsonc` 中的 `assets` 配置:
```jsonc
"assets": {
  "directory": "dist",
  "not_found_handling": "single-page-application"
}
```

### Q: 部署后样式不显示
**A**: 检查构建输出中的 CSS 文件是否存在:
```bash
ls -la dist/assets/
```

确保 CSS 文件被正确包含在构建中。

### Q: 如何查看部署日志?
**A**: 使用以下命令:
```bash
wrangler tail                    # 实时日志
wrangler deployments list        # 部署历史
```

### Q: 需要自定义域名吗?
**A**: 可以，需要:
1. 在 Cloudflare 中注册域名
2. 将域名指向 Workers
3. 在 `wrangler.jsonc` 中配置:
```jsonc
"routes": [
  {
    "pattern": "yourdomain.com/*",
    "zone_name": "yourdomain.com"
  }
]
```

---

## 🌍 环境变量

### 添加环境变量

在 `wrangler.jsonc` 中:

```jsonc
{
  "env": {
    "production": {
      "vars": {
        "ENVIRONMENT": "production",
        "API_URL": "https://api.example.com"
      }
    },
    "staging": {
      "vars": {
        "ENVIRONMENT": "staging",
        "API_URL": "https://staging-api.example.com"
      }
    }
  }
}
```

### 在代码中使用

```typescript
const environment = import.meta.env.ENVIRONMENT;
const apiUrl = import.meta.env.API_URL;
```

### 部署到特定环境

```bash
wrangler deploy --env production
wrangler deploy --env staging
```

---

## 📊 部署后检查

部署成功后，访问 Workers URL 并检查:

- ✅ 页面加载正常
- ✅ CSS 样式应用正确
- ✅ 交互功能工作正常
- ✅ 暗色模式能切换
- ✅ 响应式设计有效
- ✅ 所有路由都能访问

### 快速检查脚本

```bash
# 检查构建输出大小
du -sh dist/

# 检查文件数量
find dist -type f | wc -l

# 检查 CSS 和 JS
ls -lh dist/assets/
```

---

## 🔍 监控和调试

### 查看实时日志

```bash
wrangler tail
```

### 查看部署历史

```bash
wrangler deployments list
```

### 回滚到上一个版本

```bash
wrangler rollback
```

---

## 🎯 性能优化建议

### 1. 启用压缩

在 `wrangler.jsonc` 中:
```jsonc
"observability": {
  "enabled": true
}
```

### 2. 设置缓存

```javascript
// 在 worker 代码中 (如果需要)
export default {
  fetch: async (request) => {
    if (request.url.includes('/api/')) {
      // API 调用不缓存
      return fetch(request);
    }
    // 静态文件使用缓存
    return fetch(request);
  }
};
```

### 3. 使用动态导入

```typescript
// 代码分割示例
const module = await import('./heavy-module.js');
```

---

## 📱 测试检查清单

- [ ] 桌面浏览器测试 (Chrome, Firefox, Safari)
- [ ] 移动浏览器测试 (iOS Safari, Chrome Mobile)
- [ ] 暗色模式测试
- [ ] 键盘导航测试 (Tab 键)
- [ ] 屏幕阅读器测试 (NVDA, JAWS)
- [ ] 网络缓慢条件测试
- [ ] 离线模式测试 (如适用)

---

## 🔐 安全建议

- ✅ 不要提交 `.wrangler` 文件夹到 Git
- ✅ 使用环境变量存储敏感信息
- ✅ 定期更新依赖
- ✅ 启用 Cloudflare 的安全功能 (DDoS 保护、WAF 等)
- ✅ 监控部署日志查找异常

---

## 📖 相关资源

- [Wrangler 官方文档](https://developers.cloudflare.com/workers/wrangler/)
- [Cloudflare Workers 指南](https://developers.cloudflare.com/workers/)
- [Vite 文档](https://vitejs.dev/)
- [React 文档](https://react.dev/)

---

## 🆘 故障排除

### 部署卡住

```bash
# 取消当前操作
Ctrl+C

# 清除缓存后重试
rm -rf node_modules .wrangler
pnpm install
pnpm run deploy
```

### 内存不足

```bash
# 增加 Node 内存
export NODE_OPTIONS=--max-old-space-size=4096
pnpm run build
```

### 网络问题

```bash
# 使用代理 (如需要)
pnpm config set registry https://registry.npmmirror.com
```

---

## 💬 获得帮助

- 查看错误日志: `wrangler tail`
- 检查状态: `wrangler status`
- 提交问题: GitHub Issues
- Cloudflare 支持: https://support.cloudflare.com

---

**最后更新**: 2024-06-10  
**版本**: 1.0.0  
**状态**: ✅ 就绪
