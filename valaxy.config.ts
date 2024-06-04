import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({

  theme: 'yun',
  themeConfig: {
    banner: {
      enable: true,
      title: '大半凉的小站',
      cloud: {
        enable: true,
      },
    },

    notice: {
      enable: true,
      content: '欢迎来到大半凉的小站, 这里是一个记录生活、分享技术的地方。',
      hideInPages: false,
    },
    fireworks: {
      enable: true,
      colors: ['#12D1D6', '#3E83E1', '#3F48CC', '#0CD67D', '#67E30A']
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
