/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      /* ========================
         1. 字体与行高规范
         ======================== */
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Noto Sans"', 'Helvetica', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"'],
        mono: ['"SF Mono"', 'Monaco', '"Cascadia Code"', '"Roboto Mono"', 'Consolas', '"Courier New"', 'monospace'],
      },
      fontSize: {
        // 显示级别
        'display-lg': ['2.5rem', { lineHeight: '3rem', fontWeight: '700', letterSpacing: '-0.02em' }], // 40px
        'display-md': ['2rem', { lineHeight: '2.5rem', fontWeight: '700', letterSpacing: '-0.02em' }], // 32px
        'display-sm': ['1.5rem', { lineHeight: '2rem', fontWeight: '700', letterSpacing: '-0.01em' }], // 24px
        
        // 标题级别
        'h1': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }], // 30px
        'h2': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }], // 24px
        'h3': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }], // 20px
        'h4': ['1.125rem', { lineHeight: '1.5rem', fontWeight: '600' }], // 18px
        
        // 正文级别
        'body-lg': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }], // 18px
        'body-md': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }], // 16px (默认)
        'body-sm': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }], // 14px
        'body-xs': ['0.75rem', { lineHeight: '1.125rem', fontWeight: '400' }], // 12px
        
        // 标签/按钮级别
        'label-md': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }], // 14px
        'label-sm': ['0.75rem', { lineHeight: '1.125rem', fontWeight: '500' }], // 12px
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      lineHeight: {
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },

      /* ========================
         2. 间距与留白规范 (8px 网格系统)
         ======================== */
      spacing: {
        'xs': '0.25rem',    // 4px
        'sm': '0.5rem',     // 8px
        'md': '1rem',       // 16px
        'lg': '1.5rem',     // 24px
        'xl': '2rem',       // 32px
        '2xl': '2.5rem',    // 40px
        '3xl': '3rem',      // 48px
        '4xl': '4rem',      // 64px
        '5xl': '5rem',      // 80px
      },
      gap: {
        'xs': '0.25rem',    // 4px
        'sm': '0.5rem',     // 8px
        'md': '1rem',       // 16px
        'lg': '1.5rem',     // 24px
        'xl': '2rem',       // 32px
        '2xl': '2.5rem',    // 40px
        '3xl': '3rem',      // 48px
      },
      padding: {
        'xs': '0.25rem',    // 4px
        'sm': '0.5rem',     // 8px
        'md': '1rem',       // 16px
        'lg': '1.5rem',     // 24px
        'xl': '2rem',       // 32px
        '2xl': '2.5rem',    // 40px
        '3xl': '3rem',      // 48px
      },
      margin: {
        'xs': '0.25rem',    // 4px
        'sm': '0.5rem',     // 8px
        'md': '1rem',       // 16px
        'lg': '1.5rem',     // 24px
        'xl': '2rem',       // 32px
        '2xl': '2.5rem',    // 40px
        '3xl': '3rem',      // 48px
      },

      /* ========================
         3. 对比度与可读性 - 色彩系统
         ======================== */
      colors: {
        // 中性色系 - 明亮模式
        'gray': {
          '50': '#f9fafb',
          '100': '#f3f4f6',
          '200': '#e5e7eb',
          '300': '#d1d5db',
          '400': '#9ca3af',
          '500': '#6b7280',
          '600': '#4b5563',
          '700': '#374151',
          '800': '#1f2937',  // 正文主色
          '900': '#111827',
          '950': '#030712',
        },
        // 主色调 - 橙色
        'primary': {
          '50': '#fff7ed',
          '100': '#ffedd5',
          '200': '#fed7aa',
          '300': '#fdba74',
          '400': '#fb923c',
          '500': '#f97316',
          '600': '#ea580c',
          '700': '#c2410c',
          '800': '#9a360c',
          '900': '#7c2d12',
        },
        // 次色调 - 蓝色
        'secondary': {
          '50': '#eff6ff',
          '100': '#dbeafe',
          '200': '#bfdbfe',
          '300': '#93c5fd',
          '400': '#60a5fa',
          '500': '#3b82f6',
          '600': '#2563eb',
          '700': '#1d4ed8',
          '800': '#1e40af',
          '900': '#1e3a8a',
        },
        // 状态颜色
        'success': {
          '50': '#f0fdf4',
          '100': '#dcfce7',
          '500': '#22c55e',
          '600': '#16a34a',
          '700': '#15803d',
        },
        'warning': {
          '50': '#fefce8',
          '100': '#fef3c7',
          '500': '#eab308',
          '600': '#ca8a04',
          '700': '#a16207',
        },
        'error': {
          '50': '#fef2f2',
          '100': '#fee2e2',
          '500': '#ef4444',
          '600': '#dc2626',
          '700': '#b91c1c',
        },
        'info': {
          '50': '#eff6ff',
          '100': '#dbeafe',
          '500': '#3b82f6',
          '600': '#2563eb',
          '700': '#1d4ed8',
        },
      },

      /* ========================
         4. 交互细节优化 - 动画与过渡
         ======================== */
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '350ms',
      },
      transitionTimingFunction: {
        'ease-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      boxShadow: {
        // 阴影层级
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xs': '0.25rem',    // 4px
        'sm': '0.375rem',   // 6px
        'md': '0.5rem',     // 8px
        'lg': '0.75rem',    // 12px
        'xl': '1rem',       // 16px
        '2xl': '1.5rem',    // 24px
        'full': '9999px',
      },

      /* ========================
         5. 加载/空状态排版
         ======================== */
      opacity: {
        '0': '0',
        '5': '0.05',
        '10': '0.1',
        '20': '0.2',
        '25': '0.25',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '75': '0.75',
        '80': '0.8',
        '90': '0.9',
        '95': '0.95',
        '100': '1',
      },
      animation: {
        'spin': 'spin 1s linear infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'fade-in': 'fadeIn 0.3s ease-in',
        'fade-out': 'fadeOut 0.3s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        fadeOut: {
          'from': { opacity: '1' },
          'to': { opacity: '0' },
        },
        slideIn: {
          'from': { transform: 'translateY(10px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
