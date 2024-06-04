import { defineSiteConfig } from 'valaxy';

export default defineSiteConfig({
  url: 'https://www.halfcooler.cn',
  lang: 'zh-CN',
  title: '凉夏屋',
  author: {
    name: '大半凉',
    email: 'qq1836143240@outlook.com',
    avatar: 'https://github.com/NeptuneZhao/NeptuneZhao/blob/main/skadi.jpg?raw=true',
    status: {
      emoji: '🌈',
      message: '嘿！你丫瞅什么呢？是我，你爹！',
    }
  },
  favicon: 'icon-park-solid-cool',
  comment: {
    enable: true
  },
  description: '江山不负英雄泪, 且把利剑破长空。',
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/NeptuneZhao',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'E-Mail',
      link: 'mailto:qq1836143240@outlook.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: '金句',
      link: '/goldsaying/',
      icon: 'i-ri-android-line',
      color: '#FFF00F'
    }
  ],
  statistics: {
    enable: true,
    readTime: {
      speed: {
        cn: 270,
        en: 180
      }
    }
  },
  search: {
    enable: true,
  },
  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})