# 设计系统快速参考

## 🎯 核心原则

1. **字体与行高规范** - 统一全站字体层级、行高和字重，提升阅读性
2. **间距与留白规范** - 基于 8px 网格系统，统一页面内边距、组件间距
3. **对比度与可读性** - 正文文字避免纯黑，区分主次信息，符合 WCAG 标准
4. **交互细节优化** - 所有可点击元素有 hover 效果，表单有焦点样式
5. **加载/空状态排版** - 避免页面空白，提升用户体验

---

## 📏 字体层级速查表

| 类名 | 大小 | 用途 | 字重 |
|-----|------|------|------|
| `text-display-lg` | 40px | 页面主标题 | 700 |
| `text-display-md` | 32px | 大型标题 | 700 |
| `text-display-sm` | 24px | 次级标题 | 700 |
| `text-h1` | 30px | 页面标题 | 700 |
| `text-h2` | 24px | 一级小标题 | 600 |
| `text-h3` | 20px | 二级小标题 | 600 |
| `text-h4` | 18px | 三级小标题 | 600 |
| `text-body-lg` | 18px | 重要正文 | 400 |
| `text-body-md` | 16px | 默认正文 ✅ | 400 |
| `text-body-sm` | 14px | 次要信息 | 400 |
| `text-body-xs` | 12px | 细小文字 | 400 |
| `text-label-md` | 14px | 标签/按钮 | 500 |
| `text-label-sm` | 12px | 小型标签 | 500 |

---

## 📐 间距尺度 (8px 网格系统)

| 类名后缀 | 像素 | 用途 |
|--------|------|------|
| `-xs` | 4px | 细微间距 |
| `-sm` | 8px | 小间距 ✅ |
| `-md` | 16px | 中等间距 (默认) |
| `-lg` | 24px | 大间距 |
| `-xl` | 32px | 很大间距 |
| `-2xl` | 40px | 特大间距 |
| `-3xl` | 48px | 超大间距 |

**应用类名示例:**
- `p-md` - 内边距 16px
- `m-lg` - 外边距 24px
- `gap-md` - Flex/Grid 间隙 16px
- `px-lg py-md` - 水平 24px + 垂直 16px

---

## 🎨 文字颜色层级

### 亮色模式
```html
<!-- 主要文字 - 最高对比度 -->
<p class="text-gray-800">主要内容</p>

<!-- 次要文字 - 区分主次 -->
<p class="text-gray-600">说明文字</p>

<!-- 第三级文字 - 更弱的重点 -->
<p class="text-gray-500">辅助信息</p>
```

### 暗色模式
```html
<!-- 主要文字 -->
<p class="dark:text-gray-200">主要内容</p>

<!-- 次要文字 -->
<p class="dark:text-gray-400">说明文字</p>

<!-- 第三级文字 -->
<p class="dark:text-gray-500">辅助信息</p>
```

### 快速写法
```html
<p class="text-primary-dark">主文字</p>
<p class="text-secondary-dark">次文字</p>
<p class="text-tertiary-dark">弱重点</p>
```

### ❌ 避免使用
- `text-gray-900` (纯黑，刺眼)
- `text-black` (绝对黑)
- `text-white` (背景色，不用于文字)

---

## 🖱️ 交互元素

### 按钮
```tsx
{/* 主要按钮 - 高对比度 */}
<button class="btn-primary">
  确认
</button>

{/* 次要按钮 */}
<button class="btn-secondary">
  取消
</button>

{/* 禁用状态 */}
<button disabled class="disabled:opacity-50">
  禁用
</button>
```

### 链接
```tsx
<a href="#" class="link-primary">
  了解更多 →
</a>
```

### 表单
```tsx
<input 
  type="text" 
  class="input-base" 
  placeholder="输入内容"
/>
```

### 卡片
```tsx
<div class="card">
  卡片内容
</div>
```

---

## 🎯 状态颜色

| 状态 | 类名 | 用途 |
|-----|-----|------|
| 成功 | `text-success-600` / `bg-success-50` | ✓ 操作成功 |
| 错误 | `text-error-600` / `bg-error-50` | ✕ 操作失败 |
| 警告 | `text-warning-600` / `bg-warning-50` | ⚠ 需要注意 |
| 信息 | `text-info-600` / `bg-info-50` | ℹ 提供信息 |

---

## ⏱️ 动画和过渡

### 过渡时长
- `duration-fast` - 150ms (小型交互)
- `duration-normal` - 250ms (默认过渡) ✅
- `duration-slow` - 350ms (大型动画)

### 动画类
```html
<!-- 旋转加载 -->
<div class="animate-spin">⚙️</div>

<!-- 脉冲 -->
<div class="animate-pulse">加载中...</div>

<!-- 弹跳 -->
<div class="animate-bounce">📦</div>

<!-- 淡入 -->
<div class="animate-fade-in">✓</div>

<!-- 淡出 -->
<div class="animate-fade-out">✕</div>

<!-- 滑入 -->
<div class="animate-slide-in">新内容</div>
```

### 完整过渡示例
```tsx
<button class="transition-all duration-normal hover:bg-primary-700 hover:shadow-md hover:-translate-y-1">
  按钮
</button>
```

---

## 📦 加载和空状态

### 骨架屏
```tsx
<div class="loading-skeleton h-12 rounded-lg mb-md" />
<div class="loading-skeleton h-4 rounded-lg w-3/4" />
```

### 空状态
```tsx
<div class="empty-state">
  <div class="empty-state-icon">📭</div>
  <h2 class="empty-state-title">暂无数据</h2>
  <p class="empty-state-description">
    没有找到符合条件的内容
  </p>
</div>
```

### 加载指示
```tsx
<div class="flex items-center gap-sm">
  <div class="animate-spin">⚙️</div>
  <span>加载中...</span>
</div>
```

---

## ♿ 无障碍性 (WCAG 标准)

### 焦点样式
```html
<!-- 自动焦点圈 -->
<button class="focus-visible:ring-2 ring-primary-600">
  按钮
</button>

<!-- 或使用预定义类 -->
<button class="btn-primary">
  按钮 (已包含焦点样式)
</button>
```

### 键盘导航
- ✅ 所有交互元素可通过 Tab 键聚焦
- ✅ 所有按钮可通过 Enter/Space 激活
- ✅ 链接可通过 Enter 打开

### 颜色对比度
- ✅ **4.5:1** (WCAG AA - 推荐)
- ✅ **7:1** (WCAG AAA - 最优)
- ❌ **低于 3:1** (不推荐)

### 屏幕阅读器
```html
<!-- 提供 aria 标签 -->
<button aria-label="关闭对话框">✕</button>

<!-- 隐藏装饰性元素 -->
<span aria-hidden="true">★</span>

<!-- 表单关联 -->
<label for="name">姓名</label>
<input id="name" type="text" />
```

---

## 🌓 暗色模式

### 基本用法
```tsx
{/* 亮色模式 + 暗色模式 */}
<p class="text-gray-800 dark:text-gray-200">
  文字会自动适应模式
</p>

{/* 背景色 */}
<div class="bg-white dark:bg-gray-900">
  内容区域
</div>

{/* 边框 */}
<div class="border border-gray-200 dark:border-gray-700">
  卡片
</div>
```

### 暗色模式类
```tsx
<body class="dark">
  {/* 启用暗色模式 */}
</body>
```

---

## 📱 响应式设计

### 基础断点
- `sm` - 640px
- `md` - 768px (平板)
- `lg` - 1024px (桌面)
- `xl` - 1280px
- `2xl` - 1536px

### 响应式例子
```tsx
{/* 移动优先 */}
<h1 class="text-body-md md:text-h2 lg:text-h1">
  标题会在不同屏幕上变大
</h1>

{/* 响应式间距 */}
<div class="px-md md:px-lg lg:px-2xl">
  内容会根据屏幕宽度调整边距
</div>

{/* 响应式网格 */}
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
  <div>卡片1</div>
  <div>卡片2</div>
  <div>卡片3</div>
</div>
```

---

## 🚀 常用组件组合

### 页面标题 + 描述
```tsx
<div class="mb-2xl">
  <h1 class="text-h1 mb-md">页面标题</h1>
  <p class="text-body-lg text-gray-600 dark:text-gray-400">
    页面描述信息
  </p>
</div>
```

### 卡片列表
```tsx
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
  {items.map(item => (
    <div key={item.id} class="card">
      <h3 class="text-h4 mb-md">{item.title}</h3>
      <p class="text-body-sm text-gray-600 dark:text-gray-400 mb-lg">
        {item.description}
      </p>
      <a href="#" class="link-primary">了解更多 →</a>
    </div>
  ))}
</div>
```

### 表单
```tsx
<form class="space-y-lg">
  <div>
    <label for="name" class="text-label-md block mb-md">
      姓名 *
    </label>
    <input
      id="name"
      type="text"
      class="input-base"
      required
    />
  </div>

  <div class="flex gap-md">
    <button class="btn-primary">
      提交
    </button>
    <button class="btn-secondary">
      取消
    </button>
  </div>
</form>
```

### 反馈消息
```tsx
<div class="flex gap-md p-lg rounded-lg bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800">
  <CheckCircle class="text-success-600 flex-shrink-0" />
  <div>
    <p class="text-label-md font-medium text-success-900 dark:text-success-100">
      操作成功
    </p>
    <p class="text-body-sm text-success-700 dark:text-success-400 mt-md">
      您的操作已完成
    </p>
  </div>
</div>
```

---

## 🎯 最佳实践

### ✅ DO
- 使用 `text-body-md` 作为默认正文
- 使用 `-md` 作为默认间距 (16px)
- 总是为焦点元素提供可见反馈
- 在暗色模式下测试所有颜色
- 为长列表使用虚拟滚动
- 提供清晰的加载和空状态

### ❌ DON'T
- 使用纯黑 (`text-black` 或 `#000000`)
- 混合不同的间距系统（坚持 8px 网格）
- 隐藏焦点指示器
- 只依赖颜色表示状态（添加图标或文本）
- 在不需要的地方使用动画
- 忽视暗色模式支持

---

## 🔗 相关文件

- **完整文档**: `DESIGN_SYSTEM.md`
- **配置文件**: `tailwind.config.js`
- **全局样式**: `src/index.css`
- **展示组件**: `src/components/DesignSystemShowcase.tsx`

---

**最后更新**: 2024-06-10  
**版本**: 1.0.0
