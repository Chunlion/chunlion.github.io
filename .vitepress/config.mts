import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Chunlion VPS Optimize',
  description: '面向 VPS 初始化、网络优化、节点部署与服务器维护的一体化脚本工具',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#071326' }],
    ['meta', { name: 'referrer', content: 'strict-origin-when-cross-origin' }]
  ],
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'one-dark-pro'
    }
  },
  themeConfig: {
    siteTitle: 'Chunlion VPS Optimize',
    nav: [
      { text: '首页', link: '/VPS-Optimize/' },
      { text: '快速开始', link: '/VPS-Optimize/quick-start' },
      {
        text: '主路径',
        items: [
          { text: '3x-ui + REALITY + 443', link: '/VPS-Optimize/tutorials/01-3x-ui-reality-443' },
          { text: '已有服务器迁移', link: '/VPS-Optimize/docs/existing-server-migration' },
          { text: '443 排错/恢复', link: '/VPS-Optimize/docs/443-single-entry-troubleshooting' },
          { text: '失联与回滚急救', link: '/VPS-Optimize/docs/recovery-runbook' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/Chunlion/VPS-Optimize' }
    ],
    sidebar: {
      '/VPS-Optimize/': [
        {
          text: '主路径',
          items: [
            { text: '文档首页', link: '/VPS-Optimize/' },
            { text: '快速开始', link: '/VPS-Optimize/quick-start' },
            { text: '3x-ui + REALITY + 443', link: '/VPS-Optimize/tutorials/01-3x-ui-reality-443' },
            { text: '已有服务器迁移', link: '/VPS-Optimize/docs/existing-server-migration' },
            { text: '443 排错/恢复', link: '/VPS-Optimize/docs/443-single-entry-troubleshooting' },
            { text: '失联与回滚急救', link: '/VPS-Optimize/docs/recovery-runbook' }
          ]
        },
        {
          text: '443 单入口',
          items: [
            { text: '443 单入口教程', link: '/VPS-Optimize/docs/443-single-entry' },
            { text: 'TCP Peek 引擎', link: '/VPS-Optimize/docs/443-tcp-peek-engine' }
          ]
        },
        {
          text: '场景教程',
          items: [
            { text: '3x-ui + REALITY + 443', link: '/VPS-Optimize/tutorials/01-3x-ui-reality-443' },
            { text: '订阅工具接入 443', link: '/VPS-Optimize/tutorials/02-subscription-tools-caddy-nginx-reverse-proxy-443-single-entry' }
          ]
        },
        {
          text: '参考与工具',
          items: [
            { text: '配置路径', link: '/VPS-Optimize/docs/config-paths' },
            { text: 'dog.sh', link: '/VPS-Optimize/docs/dog' },
            { text: 'x-ui 增强套件', link: '/VPS-Optimize/docs/xui-custom-manager' }
          ]
        }
      ]
    },
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '清除搜索',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '上箭头',
              navigateDownKeyAriaLabel: '下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'ESC'
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Chunlion/VPS-Optimize' }
    ]
  }
})
