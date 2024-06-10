import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import {addonWaline} from 'valaxy-addon-waline'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
  'i-mdi-minecraft'
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  siteConfig: {
    comment: {
      enable: true
    }
  },
  addons: [
    addonWaline({
      serverURL: 'https://waline.vercel.app',
      emoji: true,
      dark: true,
      pageSize: 10,
      lang: 'zh',
      requiredMeta: [],
      login: 'enable',
      imageUploader: true,
      reaction: true
    })
  ],
  theme: 'yun',
  themeConfig: {
    banner: {
      enable: true,
      title: '大半凉的小站',
      cloud: {
        enable: true,
      },
    },
    bg_image: {
      enable: true,
      url: 'index.png',
      dark: 'index_night.png',
      opacity: 0.5
    },
    notice: {
      enable: true,
      content: '欢迎来访, 大半凉的小站是一个记录生活、分享技术的地方。',
      hideInPages: true,
    },
    fireworks: {
      enable: true,
      colors: ['#EDE5ED', '#D6DDED', '#F9E8E4', '#C0C8E7', '#EEE6E9']
    },
    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
      {
        name: '友情链接',
        url: '/friends/',
        icon: 'i-ri-links-line',
        color: '#ff7f50',
      },
    ],
    footer: {
      since: 2024,
      icon: {
        enable: true,
        name: 'i-ri-heart-fill',
        animated: true,
        color: '#f3f3f3',
        url: '/feed/',
        title: '投喂我'
      },
      powered: true,
      beian: {
        enable: true,
        icp: '黑ICP备2024016637号-1',
      },
    },
  },

  unocss: { safelist },
})
