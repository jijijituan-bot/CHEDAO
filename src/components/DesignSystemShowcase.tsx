/**
 * 设计系统展示组件
 * 演示字体层级、间距、颜色、交互细节和无障碍性的最佳实践
 */

import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Info, AlertTriangle, Loader2 } from 'lucide-react';

export default function DesignSystemShowcase() {
  const [activeTab, setActiveTab] = useState('typography');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-2xl px-lg">
      <main className="max-w-4xl mx-auto">
        {/* 页面标题 */}
        <div className="mb-3xl">
          <h1 className="text-h1 text-gray-900 dark:text-gray-50 mb-md">
            设计系统展示
          </h1>
          <p className="text-body-lg text-gray-600 dark:text-gray-400">
            完整的设计规范演示，包括排版、间距、颜色、交互和无障碍性
          </p>
        </div>

        {/* 标签导航 */}
        <div className="flex gap-md mb-2xl border-b border-gray-200 dark:border-gray-700">
          {['typography', 'spacing', 'colors', 'interactive', 'states'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-md px-md font-label-md transition-colors duration-normal ${
                activeTab === tab
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
              aria-selected={activeTab === tab}
              role="tab">
              {tab === 'typography' && '字体层级'}
              {tab === 'spacing' && '间距规范'}
              {tab === 'colors' && '颜色系统'}
              {tab === 'interactive' && '交互细节'}
              {tab === 'states' && '状态反馈'}
            </button>
          ))}
        </div>

        {/* 字体层级演示 */}
        {activeTab === 'typography' && (
          <div className="space-y-2xl">
            {/* 显示级别 */}
            <section>
              <h2 className="text-label-md text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-lg">
                显示级别
              </h2>
              <div className="space-y-lg">
                <div className="pb-lg border-b border-gray-200 dark:border-gray-700">
                  <p className="text-display-lg">Display Large (2.5rem)</p>
                  <p className="text-body-sm text-gray-500 dark:text-gray-500 mt-md">
                    用于页面主标题和最重要的信息
                  </p>
                </div>
                <div className="pb-lg border-b border-gray-200 dark:border-gray-700">
                  <p className="text-display-md">Display Medium (2rem)</p>
                  <p className="text-body-sm text-gray-500 dark:text-gray-500 mt-md">
                    用于大型标题
                  </p>
                </div>
                <div>
                  <p className="text-display-sm">Display Small (1.5rem)</p>
                  <p className="text-body-sm text-gray-500 dark:text-gray-500 mt-md">
                    用于次级标题
                  </p>
                </div>
              </div>
            </section>

            {/* 标题级别 */}
            <section>
              <h2 className="text-label-md text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-lg">
                标题级别
              </h2>
              <div className="space-y-lg">
                <div>
                  <h1 className="text-h1">Heading 1 (1.875rem)</h1>
                  <p className="text-body-sm text-gray-500 dark:text-gray-500 mt-md">
                    页面主标题，字重 700
                  </p>
                </div>
                <div>
                  <h2 className="text-h2">Heading 2 (1.5rem)</h2>
                  <p className="text-body-sm text-gray-500 dark:text-gray-500 mt-md">
                    一级小标题，字重 600
                  </p>
                </div>
                <div>
                  <h3 className="text-h3">Heading 3 (1.25rem)</h3>
                  <p className="text-body-sm text-gray-500 dark:text-gray-500 mt-md">
                    二级小标题，字重 600
                  </p>
                </div>
                <div>
                  <h4 className="text-h4">Heading 4 (1.125rem)</h4>
                  <p className="text-body-sm text-gray-500 dark:text-gray-500 mt-md">
                    三级小标题，字重 600
                  </p>
                </div>
              </div>
            </section>

            {/* 正文级别 */}
            <section>
              <h2 className="text-label-md text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-lg">
                正文级别
              </h2>
              <div className="space-y-lg">
                <div>
                  <p className="text-body-lg">
                    Body Large (1.125rem) - 用于重要的正文内容
                  </p>
                </div>
                <div>
                  <p className="text-body-md">
                    Body Medium (1rem) - 默认正文，推荐使用
                  </p>
                </div>
                <div>
                  <p className="text-body-sm">
                    Body Small (0.875rem) - 用于次要信息
                  </p>
                </div>
                <div>
                  <p className="text-body-xs">
                    Body XS (0.75rem) - 用于细小文字，如 footer 或提示
                  </p>
                </div>
              </div>
            </section>

            {/* 标签/按钮级别 */}
            <section>
              <h2 className="text-label-md text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-lg">
                标签级别
              </h2>
              <div className="space-y-lg">
                <div>
                  <label className="text-label-md">Label Medium (0.875rem, weight 500)</label>
                  <p className="text-body-sm text-gray-500 dark:text-gray-500 mt-md">
                    用于表单标签和按钮
                  </p>
                </div>
                <div>
                  <label className="text-label-sm">Label Small (0.75rem, weight 500)</label>
                  <p className="text-body-sm text-gray-500 dark:text-gray-500 mt-md">
                    用于小型标签
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* 间距规范演示 */}
        {activeTab === 'spacing' && (
          <div className="space-y-2xl">
            <p className="text-body-md text-gray-600 dark:text-gray-400 mb-lg">
              基于 8px 网格系统的间距规范 - 前端通用最优实践
            </p>

            <section>
              <h2 className="text-h3 mb-lg">内边距 (Padding)</h2>
              <div className="space-y-md">
                {[
                  { name: 'xs', value: '4px' },
                  { name: 'sm', value: '8px' },
                  { name: 'md', value: '16px' },
                  { name: 'lg', value: '24px' },
                  { name: 'xl', value: '32px' },
                  { name: '2xl', value: '40px' },
                  { name: '3xl', value: '48px' },
                ].map((spacing) => (
                  <div key={spacing.name} className="flex items-end gap-lg">
                    <div className={`p-${spacing.name} bg-primary-100 dark:bg-primary-900 rounded-lg flex-grow`}>
                      <p className="text-label-md font-mono">{spacing.name}</p>
                    </div>
                    <span className="text-body-sm text-gray-600 dark:text-gray-400 w-16">
                      {spacing.value}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-h3 mb-lg">间隙 (Gap)</h2>
              <div className="space-y-lg">
                <div className="flex gap-sm">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg"
                    />
                  ))}
                </div>
                <p className="text-body-sm text-gray-600 dark:text-gray-400">
                  <code className="bg-gray-100 dark:bg-gray-800 px-md py-sm rounded">
                    gap-sm (8px)
                  </code>
                </p>

                <div className="flex gap-lg">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg"
                    />
                  ))}
                </div>
                <p className="text-body-sm text-gray-600 dark:text-gray-400">
                  <code className="bg-gray-100 dark:bg-gray-800 px-md py-sm rounded">
                    gap-lg (24px)
                  </code>
                </p>
              </div>
            </section>
          </div>
        )}

        {/* 颜色系统演示 */}
        {activeTab === 'colors' && (
          <div className="space-y-2xl">
            {/* 文字颜色 */}
            <section>
              <h2 className="text-h3 mb-lg">文字颜色 - 对比度与可读性</h2>
              <div className="space-y-lg bg-white dark:bg-gray-800 p-lg rounded-lg border border-gray-200 dark:border-gray-700">
                <div>
                  <p className="text-body-md text-gray-800 dark:text-gray-200 font-medium mb-md">
                    主要文字 (text-gray-800 / dark:text-gray-200)
                  </p>
                  <p className="text-body-md text-gray-800 dark:text-gray-200">
                    这是主要文字内容，具有最高的对比度，用于正文和重要信息。确保符合 WCAG AA 标准
                    (对比度 4.5:1 以上)。
                  </p>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-lg">
                  <p className="text-body-md text-gray-600 dark:text-gray-400 font-medium mb-md">
                    次要文字 (text-gray-600 / dark:text-gray-400)
                  </p>
                  <p className="text-body-md text-gray-600 dark:text-gray-400">
                    这是次要文字内容，用于说明、辅助和补充信息。
                  </p>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-lg">
                  <p className="text-body-md text-gray-500 dark:text-gray-500 font-medium mb-md">
                    第三级文字 (text-gray-500)
                  </p>
                  <p className="text-body-md text-gray-500 dark:text-gray-500">
                    这是第三级文字，用于时间戳、弱重点信息等。
                  </p>
                </div>
              </div>
            </section>

            {/* 状态颜色 */}
            <section>
              <h2 className="text-h3 mb-lg">状态颜色</h2>
              <div className="grid grid-cols-2 gap-lg">
                <div className="bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800 p-lg rounded-lg">
                  <p className="text-label-md text-success-700 dark:text-success-400 font-medium">
                    ✓ 成功
                  </p>
                  <p className="text-body-sm text-success-600 dark:text-success-500 mt-md">
                    操作成功完成
                  </p>
                </div>

                <div className="bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-800 p-lg rounded-lg">
                  <p className="text-label-md text-error-700 dark:text-error-400 font-medium">
                    ✕ 错误
                  </p>
                  <p className="text-body-sm text-error-600 dark:text-error-500 mt-md">
                    操作失败或出现问题
                  </p>
                </div>

                <div className="bg-warning-50 dark:bg-warning-900/20 border border-warning-200 dark:border-warning-800 p-lg rounded-lg">
                  <p className="text-label-md text-warning-700 dark:text-warning-400 font-medium">
                    ⚠ 警告
                  </p>
                  <p className="text-body-sm text-warning-600 dark:text-warning-500 mt-md">
                    需要注意的问题
                  </p>
                </div>

                <div className="bg-info-50 dark:bg-info-900/20 border border-info-200 dark:border-info-800 p-lg rounded-lg">
                  <p className="text-label-md text-info-700 dark:text-info-400 font-medium">
                    ℹ 信息
                  </p>
                  <p className="text-body-sm text-info-600 dark:text-info-500 mt-md">
                    提供额外的信息
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* 交互细节演示 */}
        {activeTab === 'interactive' && (
          <div className="space-y-2xl">
            {/* 按钮 */}
            <section>
              <h2 className="text-h3 mb-lg">按钮 - Hover、Focus、Active 效果</h2>
              <div className="space-y-lg">
                <div>
                  <p className="text-body-sm text-gray-600 dark:text-gray-400 mb-md">
                    主要按钮 - 试试 hover、focus、click
                  </p>
                  <button className="btn-primary">
                    主要按钮
                  </button>
                </div>

                <div>
                  <p className="text-body-sm text-gray-600 dark:text-gray-400 mb-md">
                    次要按钮
                  </p>
                  <button className="btn-secondary">
                    次要按钮
                  </button>
                </div>

                <div>
                  <p className="text-body-sm text-gray-600 dark:text-gray-400 mb-md">
                    加载状态
                  </p>
                  <button
                    onClick={() => {
                      setIsLoading(true);
                      setTimeout(() => setIsLoading(false), 2000);
                    }}
                    disabled={isLoading}
                    className="btn-primary disabled:opacity-75 flex items-center gap-sm">
                    {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                    {isLoading ? '加载中...' : '点击加载'}
                  </button>
                </div>
              </div>
            </section>

            {/* 链接 */}
            <section>
              <h2 className="text-h3 mb-lg">链接</h2>
              <div className="space-y-lg">
                <p className="text-body-md">
                  这是一个
                  <a href="#" className="link-primary ml-xs">
                    带有焦点样式的链接
                  </a>
                  ，按 Tab 键可看到焦点状态
                </p>
              </div>
            </section>

            {/* 卡片 */}
            <section>
              <h2 className="text-h3 mb-lg">卡片 - Hover 效果</h2>
              <div className="card">
                <h4 className="text-h4 mb-md">可交互的卡片</h4>
                <p className="text-body-md text-gray-600 dark:text-gray-400 mb-lg">
                  试试鼠标 hover 效果，卡片会升起并显示阴影。
                </p>
                <a href="#" className="text-primary-600 hover:text-primary-700">
                  了解更多 →
                </a>
              </div>
            </section>

            {/* 表单 */}
            <section>
              <h2 className="text-h3 mb-lg">表单元素 - Focus 样式</h2>
              <div className="space-y-lg">
                <div>
                  <label htmlFor="name" className="text-label-md block mb-md">
                    姓名
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="输入您的姓名"
                    className="input-base"
                  />
                  <p className="text-body-xs text-gray-500 dark:text-gray-500 mt-md">
                    点击输入框，按 Tab 键可看到焦点样式
                  </p>
                </div>

                <div>
                  <label htmlFor="email" className="text-label-md block mb-md">
                    邮箱
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="输入您的邮箱"
                    className="input-base"
                  />
                </div>
              </div>
            </section>
          </div>
        )}

        {/* 状态反馈演示 */}
        {activeTab === 'states' && (
          <div className="space-y-2xl">
            {/* 加载状态 */}
            <section>
              <h2 className="text-h3 mb-lg">加载状态</h2>
              <div className="space-y-lg">
                {/* 骨架屏 */}
                <div>
                  <p className="text-body-md text-gray-600 dark:text-gray-400 mb-lg">
                    骨架屏 (Skeleton)
                  </p>
                  <div className="space-y-md">
                    <div className="loading-skeleton h-12 rounded-lg" />
                    <div className="loading-skeleton h-4 rounded-lg w-3/4" />
                    <div className="loading-skeleton h-4 rounded-lg w-1/2" />
                  </div>
                </div>

                {/* 加载指示器 */}
                <div>
                  <p className="text-body-md text-gray-600 dark:text-gray-400 mb-lg">
                    加载指示器
                  </p>
                  <div className="flex items-center gap-md">
                    <Loader2 className="animate-spin text-primary-600" />
                    <span className="text-body-md text-gray-600 dark:text-gray-400">
                      加载中...
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 空状态 */}
            <section>
              <h2 className="text-h3 mb-lg">空状态 (Empty State)</h2>
              <div className="empty-state bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="empty-state-icon">📭</div>
                <h3 className="empty-state-title">暂无数据</h3>
                <p className="empty-state-description">
                  没有找到符合条件的内容，请调整搜索条件重试
                </p>
              </div>
            </section>

            {/* 反馈消息 */}
            <section>
              <h2 className="text-h3 mb-lg">反馈消息 (Alerts)</h2>
              <div className="space-y-lg">
                {/* 成功 */}
                <div className="flex gap-md p-lg rounded-lg bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800">
                  <CheckCircle className="h-5 w-5 text-success-600 dark:text-success-400 flex-shrink-0 mt-xs" />
                  <div>
                    <p className="text-label-md font-medium text-success-900 dark:text-success-100">
                      操作成功
                    </p>
                    <p className="text-body-sm text-success-700 dark:text-success-400 mt-md">
                      您的操作已成功完成，系统已记录相关信息。
                    </p>
                  </div>
                </div>

                {/* 错误 */}
                <div className="flex gap-md p-lg rounded-lg bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-800">
                  <AlertCircle className="h-5 w-5 text-error-600 dark:text-error-400 flex-shrink-0 mt-xs" />
                  <div>
                    <p className="text-label-md font-medium text-error-900 dark:text-error-100">
                      操作失败
                    </p>
                    <p className="text-body-sm text-error-700 dark:text-error-400 mt-md">
                      出现错误，请检查您的输入并重试。
                    </p>
                  </div>
                </div>

                {/* 警告 */}
                <div className="flex gap-md p-lg rounded-lg bg-warning-50 dark:bg-warning-900/20 border border-warning-200 dark:border-warning-800">
                  <AlertTriangle className="h-5 w-5 text-warning-600 dark:text-warning-400 flex-shrink-0 mt-xs" />
                  <div>
                    <p className="text-label-md font-medium text-warning-900 dark:text-warning-100">
                      需要注意
                    </p>
                    <p className="text-body-sm text-warning-700 dark:text-warning-400 mt-md">
                      您的操作可能产生预期外的结果，请确认后继续。
                    </p>
                  </div>
                </div>

                {/* 信息 */}
                <div className="flex gap-md p-lg rounded-lg bg-info-50 dark:bg-info-900/20 border border-info-200 dark:border-info-800">
                  <Info className="h-5 w-5 text-info-600 dark:text-info-400 flex-shrink-0 mt-xs" />
                  <div>
                    <p className="text-label-md font-medium text-info-900 dark:text-info-100">
                      提示信息
                    </p>
                    <p className="text-body-sm text-info-700 dark:text-info-400 mt-md">
                      这是一条信息提示，帮助用户了解相关内容。
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* 底部提示 */}
        <div className="mt-3xl pt-lg border-t border-gray-200 dark:border-gray-700">
          <p className="text-body-sm text-gray-600 dark:text-gray-400">
            💡 提示：所有交互元素都支持键盘导航。按 Tab 键可以在元素间切换，Enter 或 Space 键可以激活。
          </p>
        </div>
      </main>
    </div>
  );
}
