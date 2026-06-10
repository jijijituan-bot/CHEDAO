# 设计系统指南

本文档描述了项目的完整设计系统，包括排版、间距、颜色、交互细节和无障碍性规范。

---

## 📏 1. 字体与行高规范

### 字体栈
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
```

### 排版层级

#### 显示级别（Display）- 最大的文字
- **Display Large (40px)**: `text-display-lg` - 用于页面主标题
- **Display Medium (32px)**: `text-display-md` - 用于大型标题
- **Display Small (24px)**: `text-display-sm` - 用于次级标题

#### 标题级别 (Headings)
- **H1 (30px)**: `text-h1` - 页面主标题，字重 700
- **H2 (24px)**: `text-h2` - 一级小标题，字重 600
- **H3 (20px)**: `text-h3` - 二级小标题，字重 600
- **H4 (18px)**: `text-h4` - 三级小标题，字重 600

#### 正文级别 (Body)
- **Body Large (18px)**: `text-body-lg` - 用于重要正文
- **Body Medium (16px)**: `text-body-md` - 默认正文，推荐使用
- **Body Small (14px)**: `text-body-sm` - 用于次要信息
- **Body XS (12px)**: `text-body-xs` - 用于细小文字

#### 标签/按钮级别 (Labels)
- **Label Medium (14px)**: `text-label-md` - 按钮、标签，字重 500
- **Label Small (12px)**: `text-label-sm` - 小型标签，字重 500

### 字重规范
- **100**: Thin（极细）
- **300**: Light（细）
- **400**: Normal（正常）- 默认正文
- **500**: Medium（中等）- 标签、强调
- **600**: Semibold（中粗）- 二级标题
- **700**: Bold（粗）- 一级标题
- **800**: Extrabold（极粗）
- **900**: Black（黑色）

### 使用示例
```tsx
// 正确的用法
<h1 className="text-h1">页面标题</h1>
<p className="text-body-md">这是正文内容</p>
<label className="text-label-md">表单标签</label>
<small className="text-body-xs">小提示文字</small>

// 或使用自定义类
<h1 className="text-3xl font-bold">标题</h1>
```

---

## 📐 2. 间距与留白规范

基于 **8px 网格系统** - 前端通用最优实践

### 间距尺度 (Spacing Scale)
- **xs**: 4px (0.25rem) - 细微间距
- **sm**: 8px (0.5rem) - 小间距
- **md**: 16px (1rem) - 中等间距，推荐默认
- **lg**: 24px (1.5rem) - 大间距
- **xl**: 32px (2rem) - 很大间距
- **2xl**: 40px (2.5rem) - 特大间距
- **3xl**: 48px (3rem) - 超大间距
- **4xl**: 64px (4rem)
- **5xl**: 80px (5rem)

### 应用场景

#### 内边距 (Padding)
```tsx
{/* 按钮内边距 */}
<button className="px-md py-sm">按钮</button>

{/* 卡片内边距 */}
<div className="p-lg">卡片内容</div>

{/* 页面内边距 */}
<main className="px-lg py-md">页面内容</main>
```

#### 外边距 (Margin)
```tsx
{/* 标题下边距 */}
<h2 className="mb-lg">小标题</h2>

{/* 段落间距 */}
<p className="mb-md">段落1</p>
<p className="mb-md">段落2</p>

{/* 底部无边距 */}
<p className="mb-0">最后一个段落</p>
```

#### 间隙 (Gap)
```tsx
{/* Flexbox 间隙 */}
<div className="flex gap-md">
  <div>项目1</div>
  <div>项目2</div>
  <div>项目3</div>
</div>

{/* Grid 间隙 */}
<div className="grid grid-cols-3 gap-lg">
  <div>卡片1</div>
  <div>卡片2</div>
  <div>卡片3</div>
</div>
```

### 间距组合建议
- **紧凑**：xs + sm
- **标准**：md + lg
- **宽松**：lg + xl + 2xl

---

## 🎨 3. 对比度与可读性

### 文字颜色层级

#### 主要文字 (Primary Text)
```tsx
// 正文 - 亮色背景下使用 gray-800，暗色背景下使用 gray-200
<p className="text-gray-800 dark:text-gray-200">主要内容</p>

// 简化写法
<p className="text-primary-dark">主要内容</p>
```

#### 次要文字 (Secondary Text)
```tsx
// 说明文字、辅助信息
<p className="text-gray-600 dark:text-gray-400">说明文字</p>

// 简化写法
<p className="text-secondary-dark">说明文字</p>
```

#### 第三级文字 (Tertiary Text)
```tsx
// 更弱的重点信息、时间戳等
<span className="text-gray-500 dark:text-gray-500">2024-06-10</span>

// 简化写法
<span className="text-tertiary-dark">2024-06-10</span>
```

### 避免使用的颜色
- ❌ 纯黑色 (#000000) - 使用 text-gray-900 代替
- ❌ 纯白色 (#FFFFFF) 的背景 - 使用 bg-gray-50 代替
- ❌ 纯灰色 - 使用灰度阶梯中的相应颜色

### 高对比度交互元素

#### 按钮
```tsx
{/* 主要按钮 - 高对比度 */}
<button className="btn-primary">
  确认
</button>

{/* 次要按钮 */}
<button className="btn-secondary">
  取消
</button>

{/* 手动实现 */}
<button className="px-md py-sm bg-primary-600 text-white hover:bg-primary-700">
  按钮
</button>
```

#### 链接
```tsx
{/* 带焦点样式的链接 */}
<a href="#" className="link-primary">链接</a>

{/* 手动实现 */}
<a href="#" className="text-primary-600 hover:text-primary-700 focus:ring-2 ring-primary-600">
  链接
</a>
```

#### 表单元素
```tsx
{/* 输入框焦点样式 */}
<input type="text" className="input-base" placeholder="输入内容" />

{/* 手动实现 */}
<input 
  type="text" 
  className="px-md py-sm border border-gray-300 rounded-lg focus:ring-2 ring-primary-600 focus:border-primary-600"
/>
```

### 颜色系统

#### 状态颜色
- **成功** (Success): `text-success-600`, `bg-success-50`
- **警告** (Warning): `text-warning-600`, `bg-warning-50`
- **错误** (Error): `text-error-600`, `bg-error-50`
- **信息** (Info): `text-info-600`, `bg-info-50`

#### 色彩对比度检查
所有文字与背景的对比度应符合 WCAG AA 标准 (至少 4.5:1)

---

## 🖱️ 4. 交互细节优化

### Hover 效果

#### 按钮 Hover
```tsx
{/* 颜色变化 + 阴影 + 缩放 */}
<button className="bg-primary-600 hover:bg-primary-700 hover:shadow-md hover:-translate-y-1 transition-all">
  按钮
</button>
```

#### 卡片 Hover
```tsx
<div className="card hover:shadow-lg hover:-translate-y-2">
  卡片内容
</div>
```

#### 链接 Hover
```tsx
<a href="#" className="text-primary-600 hover:text-primary-700 hover:underline">
  链接文字
</a>
```

### Focus 样式（焦点）

#### 按钮焦点
```tsx
<button className="focus:outline-none focus:ring-2 ring-offset-2 ring-primary-600">
  按钮
</button>
```

#### 表单焦点
```tsx
<input 
  type="text" 
  className="focus:outline-none focus:ring-2 ring-primary-600 focus:border-primary-600"
/>
```

### Active 状态（点击时）
```tsx
<button className="active:transform active:scale-95 active:shadow-none">
  按钮
</button>
```

### Disabled 状态（禁用）
```tsx
<button disabled className="disabled:opacity-50 disabled:cursor-not-allowed">
  禁用按钮
</button>
```

### 过渡和动画

#### 过渡时长
- **快速** (fast): 150ms - 用于小型交互
- **正常** (normal): 250ms - 默认过渡时长
- **缓慢** (slow): 350ms - 用于大型动画

```tsx
{/* 所有交互都应该有过渡 */}
<button className="transition-all duration-normal hover:bg-primary-700">
  按钮
</button>
```

#### 预定义动画
- `animate-spin` - 旋转加载
- `animate-pulse` - 脉冲（淡入淡出）
- `animate-bounce` - 弹跳
- `animate-fade-in` - 淡入
- `animate-fade-out` - 淡出
- `animate-slide-in` - 滑入

---

## 📦 5. 加载 / 空状态排版

### 空状态

#### 完整空状态组件
```tsx
<div className="empty-state">
  <div className="empty-state-icon">📭</div>
  <h2 className="empty-state-title">暂无数据</h2>
  <p className="empty-state-description">没有找到符合条件的内容，请调整搜索条件重试</p>
</div>
```

#### 使用容器类
```tsx
<div className="empty-container">
  <div className="empty-icon">🔍</div>
  <h3 className="empty-title">未找到结果</h3>
  <p className="empty-description">尝试使用不同的关键词进行搜索</p>
</div>
```

### 加载状态

#### 骨架屏 (Skeleton Loading)
```tsx
{/* 单个骨架屏 */}
<div className="skeleton h-12 rounded-lg mb-md" />
<div className="skeleton h-4 rounded-lg" />

{/* 多个骨架屏 */}
<div className="space-y-md">
  <div className="skeleton h-20 rounded-lg" />
  <div className="skeleton h-20 rounded-lg" />
  <div className="skeleton h-20 rounded-lg" />
</div>
```

#### 加载动画
```tsx
{/* 旋转加载器 */}
<div className="animate-spin">⚙️</div>

{/* 脉冲加载 */}
<div className="animate-pulse text-gray-500">加载中...</div>

{/* 完整加载状态 */}
<div className="flex items-center justify-center gap-sm">
  <div className="animate-spin text-primary-600">⚙️</div>
  <span className="text-gray-600">加载中...</span>
</div>
```

#### 使用 loading-skeleton 类
```tsx
<div className="loading-skeleton h-12 mb-md" />
<div className="loading-skeleton h-4" />
```

### 空状态最佳实践
1. **提供清晰的图标或插画** - 帮助用户理解状态
2. **明确的标题** - 简明扼要说明现状
3. **有用的描述** - 解释为什么出现这个状态
4. **可选的操作按钮** - 如"返回主页"、"重试"等

---

## ♿ 6. 无障碍性 (WCAG 标准)

### 焦点管理

所有交互元素必须有**可见的焦点指示器**：
```tsx
{/* 推荐使用 focus-visible，自动处理焦点圈 */}
<button className="focus-visible:ring-2 ring-offset-2 ring-primary-600">
  按钮
</button>
```

### 颜色对比度

- **WCAG AA**: 文字与背景对比度至少 4.5:1（推荐）
- **WCAG AAA**: 文字与背景对比度至少 7:1（最优）

#### 推荐的文字颜色组合
✅ **推荐**
```tsx
{/* 亮色背景 */}
<p className="text-gray-800 dark:text-gray-200">推荐</p>
<p className="text-gray-700 dark:text-gray-300">推荐</p>

{/* 暗色背景 */}
<p className="text-white dark:text-gray-100">推荐</p>
```

❌ **不推荐**
```tsx
{/* 对比度不足 */}
<p className="text-gray-500 on-gray-bg">不推荐</p>
<p className="text-gray-600 on-white-bg">不推荐</p>
```

### 键盘导航

确保所有交互元素都支持键盘操作：
```tsx
{/* 可聚焦元素 */}
<button>按钮</button>
<a href="#">链接</a>
<input type="text" />

{/* 非可聚焦元素变成可聚焦 */}
<div role="button" tabIndex={0}>可交互的 div</div>
```

### 屏幕阅读器支持

```tsx
{/* 提供 aria 标签 */}
<button aria-label="关闭对话框">✕</button>

{/* 隐藏装饰性元素 */}
<span aria-hidden="true">★</span>

{/* 表单关联 */}
<label htmlFor="name">姓名</label>
<input id="name" type="text" />
```

### 跳过链接

```tsx
<a href="#main-content" className="skip-link">
  跳过导航进入主要内容
</a>
```

### 减少动画

尊重用户的动画偏好：
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🎯 实际使用示例

### 完整页面示例

```tsx
import React from 'react';

export default function ExamplePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* 页面标题 */}
      <h1 className="text-h1 text-gray-900 dark:text-gray-50 mb-lg">
        欢迎使用
      </h1>

      {/* 说明文字 */}
      <p className="text-body-md text-gray-600 dark:text-gray-400 mb-2xl">
        这是一个展示设计系统的示例页面。
      </p>

      {/* 卡片组 */}
      <div className="grid grid-cols-3 gap-lg mb-2xl">
        <div className="card">
          <h2 className="text-h3 text-gray-900 dark:text-gray-100 mb-md">
            功能一
          </h2>
          <p className="text-body-sm text-gray-600 dark:text-gray-400 mb-lg">
            功能说明文字。
          </p>
          <button className="btn-primary">
            了解更多
          </button>
        </div>

        <div className="card">
          <h2 className="text-h3 text-gray-900 dark:text-gray-100 mb-md">
            功能二
          </h2>
          <p className="text-body-sm text-gray-600 dark:text-gray-400 mb-lg">
            功能说明文字。
          </p>
          <button className="btn-secondary">
            了解更多
          </button>
        </div>

        <div className="card">
          <h2 className="text-h3 text-gray-900 dark:text-gray-100 mb-md">
            功能三
          </h2>
          <p className="text-body-sm text-gray-600 dark:text-gray-400 mb-lg">
            功能说明文字。
          </p>
          <a href="#" className="link-primary">
            了解更多 →
          </a>
        </div>
      </div>

      {/* 空状态示例 */}
      <div className="empty-state">
        <div className="empty-state-icon">📭</div>
        <h2 className="empty-state-title">暂无内容</h2>
        <p className="empty-state-description">
          您还没有创建任何内容，点击下方按钮开始创建。
        </p>
      </div>
    </main>
  );
}
```

---

## 📋 快速参考

### 常用类名速查表

| 目的 | 类名示例 | 说明 |
|-----|--------|------|
| 标题 | `text-h1` `text-h2` `text-h3` | 不同级别标题 |
| 正文 | `text-body-md` `text-body-sm` | 不同尺寸正文 |
| 内边距 | `p-md` `px-lg` `py-sm` | 8px 网格系统 |
| 外边距 | `m-md` `mx-lg` `my-sm` | 8px 网格系统 |
| 间隙 | `gap-md` | Flex/Grid 间隙 |
| 文字颜色 | `text-primary-dark` | 主要文字 |
| 背景 | `bg-white dark:bg-gray-900` | 背景颜色 |
| 阴影 | `shadow-md` `shadow-lg` | 阴影效果 |
| 圆角 | `rounded-lg` `rounded-xl` | 圆角半径 |
| 过渡 | `transition-all duration-normal` | 动画过渡 |
| 焦点 | `focus-visible:ring-2 ring-primary-600` | 键盘焦点 |
| 禁用 | `disabled:opacity-50` | 禁用状态 |
| 暗黑 | `dark:text-gray-100` | 暗色模式 |

---

## 🔧 自定义扩展

如果需要自定义某些样式，编辑 `tailwind.config.js` 的 `theme.extend` 部分：

```javascript
extend: {
  colors: {
    'brand': '#ff6b6b', // 自定义品牌色
  },
  fontSize: {
    'xs-custom': '0.625rem', // 自定义字体大小
  },
  spacing: {
    'gutter': '1.5rem', // 自定义间距
  },
}
```

---

## 📚 参考资源

- [Tailwind CSS 官方文档](https://tailwindcss.com)
- [WCAG 2.1 无障碍指南](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web 内容无障碍指南](https://www.w3.org/WAI/fundamentals/accessibility-intro/)

---

**最后更新**: 2024-06-10
**版本**: 1.0.0
