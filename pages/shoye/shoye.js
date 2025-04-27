Page({
  data: {
    banners: [
      // 在这里插入轮播图数据
      {
        id: 1,
        image: '/images/brnners/轮播图1.jpg', // 图片路径
        title: '第一届台球大师赛',            // 图片文字
        titlePosition: 'top',               // 文字位置（top/bottom）
        link: ''     // 点击跳转链接
      },
      {
        id: 2,
        image: '/images/brnners/轮播图2.png',
        title: '新款球杆上市',
        titlePosition: 'bottom',
        link: ''
      },
      {
        id: 3,
        image: '/images/brnners/轮播图3.jpg',
        title: '新款球杆上市',
        titlePosition: 'bottom',
        link: ''
      },
      {
        id: 4,
        image: '/images/brnners/轮播图4.png',
        title: '新款球杆上市',
        titlePosition: 'bottom',
        link: ''
      },
      {
        id: 5,
        image: '/images/brnners/轮播图5.jpg',
        title: '新款球杆上市',
        titlePosition: 'bottom',
        link: ''
      },{
        id: 6,
        image: '/images/brnners/轮播图6.jpg',
        title: '新款球杆上市',
        titlePosition: 'bottom',
        link: ''
      }
      
    ],
  
    newsList: [
      // 在这里插入新闻数据
      {
        id: 1,
        cover: '/images/brnners/新闻1.jpeg',    // 新闻封面图
        title: '中式台球国际职业联赛中国公开赛开杆 总奖金近2200万元', // 新闻标题
        time: '1小时前',
        tag: '热门',
        tagType: 'hot',                     // 标签样式
        important: true                     // 是否高亮边框
      },
      {
        id: 2,
        cover: '/images/brnners/新闻2.jpeg',    // 新闻封面图
        title: '单局限时赛首日中国10人进64强 斯佳辉单杆最高分', // 新闻标题
        time: '1小时前',
        tag: '热门',
        tagType: 'hot',                     // 标签样式
        important: true 
      },
      {
        id: 3,
        cover: '/images/brnners/新闻3.jpeg',    // 新闻封面图
        title: '209杆147一览：琼斯轰生涯首杆 2025年新年首杆', // 新闻标题
        time: '2小时前',
        tag: '热门',
        tagType: 'hot',                     // 标签样式
        important: true                     // 是否高亮边框
      },
      {
        id: 4,
        cover: '/images/brnners/新闻4.jpeg',    // 新闻封面图
        title: '2024莫斯考尼杯欧洲队斩获5连冠 杰森-肖荣膺MVP', // 新闻标题
        time: '3小时前',
        tag: '热门',
        tagType: 'hot',                     // 标签样式
        important: true                     // 是否高亮边框
      },
      {
        id: 5,
        cover: '/images/brnners/新闻5.jpeg',    // 新闻封面图
        title: '大师赛首日罗伯逊救4赛点逆转希金斯 墨菲6-3晋级', // 新闻标题
        time: '4小时前',
        tag: '热门',
        tagType: 'hot',                     // 标签样式
        important: true                     // 是否高亮边框
      },   
      {
        id: 6,
        cover: '/images/brnners//新闻6.jpeg',    // 新闻封面图
        title: '冠军联赛第1组首日瓦菲3胜1负居首 庞俊旭暂列第3', // 新闻标题
        time: '6小时前',
        tag: '热门',
        tagType: 'hot',                     // 标签样式
        important: true                     // 是否高亮边框
      },
      {
        id: 7,
        cover: '/images/brnners/新闻7.jpeg',    // 新闻封面图
        title: '赵心童斯诺克世锦赛10-4击败吕昊天晋级 中国军团表现抢眼', // 新闻标题
        time: '6小时前',
        tag: '热门',
        tagType: 'hot',                     // 标签样式
        important: true                     // 是否高亮边框
      },
      {
        id: 8,
        cover: '/images/brnners/新闻8.jpeg',    // 新闻封面图
        title: '苏公赛正赛第3日丁俊晖轰3杆60+ 4-2逆转进16强', // 新闻标题
        time: '6小时前',
        tag: '热门',
        tagType: 'hot',                     // 标签样式
        important: true                     // 是否高亮边框
      },
      {
        id: 9,
        cover: '/images/brnners/新闻9.jpeg',    // 新闻封面图
        title: '苏公赛正赛第4日中国3人进8强 本土无冠魔咒继续', // 新闻标题
        time: '7小时前',
        tag: '热门',
        tagType: 'hot',                     // 标签样式
        important: true                     // 是否高亮边框
      },
      {
        id: 10,
        cover: '/images/brnners/新闻10.jpeg',    // 新闻封面图
        title: '斯诺克世界公开赛启动 玉山2月23日开启巅峰对决', // 新闻标题
        time: '7小时前',
        tag: '热门',
        tagType: 'hot',                     // 标签样式
        important: true                     // 是否高亮边框
      },
      {
        id: 11,
        cover: '/images/brnners/新闻11.jpeg',    // 新闻封面图
        title: '世界公开赛资格赛次日中国4胜5负 雷佩凡救4赛点', // 新闻标题
        time: '8小时前',
        tag: '热门',
        tagType: 'hot',                     // 标签样式
        important: true                     // 是否高亮边框
      },
      {
        id: 12,
        cover: '/images/brnners/新闻12.jpeg',    // 新闻封面图
        title: '大师赛超级赛首位女子冠军 唐春晓双赛点绝杀登顶', // 新闻标题
        time: '8小时前',
        tag: '热门',
        tagType: 'hot',                     // 标签样式
        important: true                     // 是否高亮边框
      }
    ]
},
  // 轮播图切换事件
  onSwiperChange(e) {
    this.setData({ swiperCurrent: e.detail.current })
  },

  // 图片加载失败处理
  onImageError(e) {
    const index = e.currentTarget.dataset.index
    const key = `banners[${index}].image`
    this.setData({
      [key]: '/images/default-banner.jpg'
    })
  },

  // 查看新闻详情
  viewNewsDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/news/detail?id=${id}`
    })
  },

  // 查看所有新闻
  viewAllNews() {
    wx.navigateTo({
      url: '/pages/news/list'
    })
  },

  // 点击轮播图
  onBannerTap(e) {
    const index = e.currentTarget.dataset.index
    const link = this.data.banners[index].link
    if (link) {
      wx.navigateTo({ url: link })
    }
  }
})