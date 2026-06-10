# 🎨 设计系统使用指南

这是一份快速入门指南，帮您快速上手项目的设计系统。

---

## 📚 文档导航

| 文档 | 内容 | 适合人群 |
|-----|-----|--------|
| **DESIGN_SYSTEM.md** | 完整详细的设计文档，包含所有规范和最佳实践 | 👨‍💼 项目经理、🎨 设计师、👨‍💻 所有开发者 |
| **DESIGN_QUICK_REFERENCE.md** | 速查表和表格，快速查找常用类名 | ⚡ 前端开发者 |
| **IMPLEMENTATION_SUMMARY.md** | 实现总结，了解做了什么、如何做的 | 🧑‍💻 技术负责人 |
| **CHANGES.md** | 改动日志，看改了哪些文件 | 📝 版本管理 |
| **本文件** | 快速入门指南 | 🚀 新项目成员 |

---

## ⚡ 5分钟快速开始

### 1️⃣ 最常用的字体类名 (复制即用)

```html
<!-- 标题 -->
<h1 class="text-h1">页面标题</h1>
<h2 class="text-h2">小标题</h2>
<h3 class="text-h3">更小的标题</h3>

<!-- 正文 (推荐使用 text-body-md) -->
<p class="text-body-md">默认正文内容</p>
<p class="text-body-sm">小一点的正文</p>

<!-- 标签 -->
<label class="text-label-md">表单标签</label>
```

### 2️⃣ 最常用的间距 (8px 网格系统)

```html
<!-- 内边距 (padding) -->
<div class="p-md">16px 内边距</div>
<div class="px-lg py-sm">水平24px，垂直8px</div>

<!-- 外边距 (margin) -->
<h1 class="mb-lg">下边距24px</h1>

<!-- 间隙 (gap) -->
<div class="flex gap-md">
  <div>项目1</div>
  <div>项目2</div>
</div>
```

**常用值**: sm (8px), md (16px), lg (24px), xl (32px)

### 3️⃣ 文字颜色 (对比度最优)

```html
<!-- ✅ 推荐做法 -->
<p class="text-gray-800 dark:text-gray-200">
  主要文字 - 最高对比度
</p>

<p class="text-gray-600 dark:text-gray-400">
  次要文字 - 用于说明
</p>

<!-- ❌ 避免做法 -->
<p class="text-black">不要使用纯黑</p>
<p class="text-gray-900">这样也不好</p>
```

### 4️⃣ 最常用的组件

```tsx
// 按钮
<button class="btn-primary">主要按钮</button>
<button class="btn-secondary">次要按钮</button>

// 链接
<a href="#" class="link-primary">链接文字</a>

// 输入框
<input type="text" class="input-base" placeholder="输入内容" />

// 卡片
<div class="card">
  <h3 class="text-h3 mb-md">卡片标题</h3>
  <p class="text-body-md">卡片内容</p>
</div>

// 空状态
<div class="empty-state">
  <div class="empty-state-icon">📭</div>
  <h2 class="empty-state-title">暂无数据</h2>
  <p class="empty-state-description">没有找到符合条件的内容</p>
</div>
```

### 5️⃣ 暗色模式 (自动适配)

```html
<!-- 暗色模式自动处理 -->
<p class="text-gray-800 dark:text-gray-200">自动适配</p>
<div class="bg-white dark:bg-gray-900">背景色自动变</div>
<div class="border border-gray-200 dark:border-gray-700">边框自动变</div>
```

---

## 🎯 常见场景

### 场景1: 创建一个页面

```tsx
import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* 页面标题区 */}
      <div className="mb-2xl">
        <h1 className="text-h1 text-gray-900 dark:text-gray-50 mb-md">
          页面标题
        </h1>
        <p className="text-body-lg text-gray-600 dark:text-gray-400">
          页面描述文字
        </p>
      </div>

      {/* 卡片列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {items.map(item => (
          <div key={item.id} className="card">
            <h3 className="text-h3 mb-md">{item.title}</h3>
            <p className="text-body-sm text-gray-600 dark:text-gray-400 mb-lg">
              {item.desc}
            </p>
            <button className="btn-primary">了解更多</button>
          </div>
        ))}
      </div>
    </main>
  )
}
```

### 场景2: 创建一个表单

```tsx
<form className="space-y-lg max-w-md">
  {/* 文本输入 */}
  <div>
    <label htmlFor="name" className="text-label-md block mb-md">
      姓名 *
    </label>
    <input
      id="name"
      type="text"
      className="input-base"
      placeholder="输入您的姓名"
    />
  </div>

  {/* 邮箱输入 */}
  <div>
    <label htmlFor="email" className="text-label-md block mb-md">
      邮箱 *
    </label>
    <input
      id="email"
      type="email"
      className="input-base"
      placeholder="输入您的邮箱"
    />
  </div>

  {/* 按钮 */}
  <div className="flex gap-md pt-lg">
    <button className="btn-primary flex-1">提交</button>
    <button className="btn-secondary flex-1">取消</button>
  </div>
</form>
```

### 场景3: 显示加载状态

```tsx
{/* 骨架屏 */}
<div className="space-y-md">
  <div className="loading-skeleton h-12 rounded-lg" />
  <div className="loading-skeleton h-4 rounded-lg w-3/4" />
  <div className="loading-skeleton h-4 rounded-lg w-1/2" />
</div>

{/* 或者加载指示 */}
<div className="flex items-center justify-center gap-md py-lg">
  <div className="animate-spin">⚙️</div>
  <span className="text-gray-600">加载中...</span>
</div>
```

### 场景4: 显示空状态

```tsx
<div className="empty-state">
  <div className="empty-state-icon">📭</div>
  <h2 className="empty-state-title">暂无数据</h2>
  <p className="empty-state-description">
    没有找到符合条件的内容，请调整搜索条件重试
  </p>
</div>
```

### 场景5: 显示消息提示

```tsx
{/* 成功消息 */}
<div className="flex gap-md p-lg rounded-lg bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800">
  <span>✓</span>
  <div>
    <p className="text-label-md font-medium text-success-900 dark:text-success-100">
      操作成功
    </p>
    <p className="text-body-sm text-success-700 dark:text-success-400">
      您的操作已成功完成
    </p>
  </div>
</div>

{/* 错误消息 */}
<div className="flex gap-md p-lg rounded-lg bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-800">
  <span>✕</span>
  <div>
    <p className="text-label-md font-medium text-error-900 dark:text-error-100">
      操作失败
    </p>
    <p className="text-body-sm text-error-700 dark:text-error-400">
      出现错误，请稍后重试
    </p>
  </div>
</div>
```

---

## 📋 字体大小对应表

| 类名 | 大小 | 何时使用 |
|-----|------|--------|
| `text-h1` | 30px | 页面主标题 |
| `text-h2` | 24px | 一级小标题 |
| `text-h3` | 20px | 二级小标题 |
| `text-h4` | 18px | 三级小标题 |
| `text-body-lg` | 18px | 重要正文 |
| `text-body-md` | 16px | 默认正文 ✅ |
| `text-body-sm` | 14px | 次要信息 |
| `text-body-xs` | 12px | 小提示 |
| `text-label-md` | 14px | 按钮/标签 |

---

## 📏 间距对应表

| 类名后缀 | 像素 | 何时使用 |
|--------|------|--------|
| `-xs` | 4px | 极小间距 |
| `-sm` | 8px | 小间距 |
| `-md` | 16px | 标准间距 ✅ |
| `-lg` | 24px | 大间距 |
| `-xl` | 32px | 很大间距 |
| `-2xl` | 40px | 特大间距 |
| `-3xl` | 48px | 超大间距 |

**使用示例**: `p-md`, `m-lg`, `gap-md`, `mb-2xl`

---

## 🎨 颜色系统

### 正文颜色 (3 级)
```html
<!-- 主要文字 - 最重要 -->
<p class="text-gray-800 dark:text-gray-200">主要内容</p>

<!-- 次要文字 - 说明信息 -->
<p class="text-gray-600 dark:text-gray-400">说明文字</p>

<!-- 第三级 - 弱重点 -->
<p class="text-gray-500">时间戳或更弱的信息</p>
```

### 状态颜色 (4 种)
```html
<!-- 成功 -->
<div class="bg-success-50 text-success-600">✓ 成功</div>

<!-- 错误 -->
<div class="bg-error-50 text-error-600">✕ 错误</div>

<!-- 警告 -->
<div class="bg-warning-50 text-warning-600">⚠ 警告</div>

<!-- 信息 -->
<div class="bg-info-50 text-info-600">ℹ 信息</div>
```

---

## ⌨️ 键盘导航

所有交互元素都支持键盘操作:

| 键 | 作用 |
|----|------|
| `Tab` | 在元素间切换焦点 |
| `Shift+Tab` | 反向切换焦点 |
| `Enter` / `Space` | 激活按钮 |
| `Enter` | 打开链接 |
| `Esc` | 关闭对话框 (如果有) |

---

## 🌙 暗色模式

系统自动支持暗色模式，无需额外配置:

```html
<!-- 亮色模式: 灰色背景 -->
<!-- 暗色模式: 自动变成深色背景 -->
<div class="bg-white dark:bg-gray-900">
  内容
</div>

<!-- 亮色模式: 深灰色文字 -->
<!-- 暗色模式: 自动变成浅灰色文字 -->
<p class="text-gray-800 dark:text-gray-100">
  文字自动适配
</p>
```

---

## 🚀 性能提示

- ✅ 所有样式都是静态生成的
- ✅ 使用 Tailwind CSS，构建时自动删除未使用的样式
- ✅ 支持 CSS 变量和暗色模式切换
- ✅ 文件大小: CSS ~37KB (6.9KB gzip)

---

## ❓ 常见问题

### Q: 为什么要使用 `text-body-md` 而不是 `text-base`?
A: 因为 `text-body-md` 已经配置了最优的行高 (1.5rem)，看起来更舒适。`text-base` 行高只有 1.5，可能有点紧。

### Q: 间距可以用 1rem 代替 p-md 吗?
A: 可以，但不推荐。使用预定义的间距类可以保持整个项目的一致性，也更容易维护。

### Q: 可以自定义颜色吗?
A: 可以。在 `tailwind.config.js` 的 `colors` 下添加自定义颜色。

### Q: 暗色模式怎么启用?
A: 自动的。系统根据用户的系统偏好自动切换。如果需要手动切换，使用 `useTheme()` hook。

### Q: 这些样式可以用于生产环境吗?
A: 完全可以。这套系统已经构建通过并遵循最佳实践。

---

## 📞 需要帮助?

- 📖 查看完整文档: `DESIGN_SYSTEM.md`
- ⚡ 快速查找: `DESIGN_QUICK_REFERENCE.md`
- 🎨 查看演示: 导入 `DesignSystemShowcase` 组件
- 🔍 搜索问题: 查看 `DESIGN_SYSTEM.md` 的 FAQ 部分

---

**Happy coding! 🎉**

**最后更新**: 2024-06-10  
**版本**: 1.0.0
