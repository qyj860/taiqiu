// pages/qiugan/qiugan.js
const cueData = require('../../miniprogram/data/qg.js')

Page({
  data: {
    allCues: [],
    filteredCues: [],
    displayedCues: [],
    usedCueIds: [],
    
    // 筛选选项
    priceOptions: ['全部', '0-100元', '100-200元', '200-300元', '300元以上'],
    priceIndex: 0,
    
    brandOptions: ['全部'],
    brandIndex: 0,
    
    ratingOptions: ['全部', '4星以上', '3星以上', '2星以上'],
    ratingIndex: 0,
    
    activeTab: 1,
    searchKeyword: '',
    refreshing: false,
    loadingMore: false,
    showBackTop: false,
    pageSize: 8
  },

  onLoad() {
    this.loadCues()
    this.getRandomCues(8)
  },

  loadCues() {
    const brands = [...new Set(cueData.cues.map(item => item.brand))]
    this.setData({
      allCues: cueData.cues,
      filteredCues: cueData.cues,
      brandOptions: ['全部', ...brands]
    })
  },

  // 获取随机球杆
  getRandomCues(count) {
    const { allCues, usedCueIds } = this.data
    const availableCues = allCues.filter(cue => !usedCueIds.includes(cue.id))
    
    if (availableCues.length === 0) {
      wx.showToast({
        title: '没有更多球杆了',
        icon: 'none'
      })
      return []
    }
    
    const randomCount = Math.min(count, availableCues.length)
    const randomCues = []
    const newUsedIds = [...usedCueIds]
    
    for (let i = 0; i < randomCount; i++) {
      const randomIndex = Math.floor(Math.random() * availableCues.length)
      const selectedCue = availableCues[randomIndex]
      
      // 确保不重复选择
      if (!newUsedIds.includes(selectedCue.id)) {
        randomCues.push(selectedCue)
        newUsedIds.push(selectedCue.id)
        availableCues.splice(randomIndex, 1)
      }
    }
    
    this.setData({
      usedCueIds: newUsedIds
    })
    
    return randomCues
  },

  // 下拉刷新
  onRefresh() {
    this.setData({
      refreshing: true
    })
    
    // 重置已用ID并获取新的随机球杆
    this.setData({
      usedCueIds: [],
      displayedCues: []
    }, () => {
      const randomCues = this.getRandomCues(this.data.pageSize)
      this.setData({
        displayedCues: randomCues,
        refreshing: false
      })
    })
  },

  // 上拉加载更多
  onReachBottom() {
    if (this.data.loadingMore) return
    
    this.setData({
      loadingMore: true
    })
    
    setTimeout(() => {
      const randomCues = this.getRandomCues(this.data.pageSize)
      this.setData({
        displayedCues: [...this.data.displayedCues, ...randomCues],
        loadingMore: false
      })
    }, 800)
  },

  // 滚动事件
  onPageScroll(e) {
    this.setData({
      showBackTop: e.scrollTop > 300
    })
  },

  // 返回顶部
  scrollToTop() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },

  // 搜索功能
  onSearch(e) {
    this.setData({
      searchKeyword: e.detail.value.trim()
    }, this.applyFilters)
  },

  // 价格筛选
  changePrice(e) {
    this.setData({
      priceIndex: e.detail.value
    }, this.applyFilters)
  },

  // 品牌筛选
  changeBrand(e) {
    this.setData({
      brandIndex: e.detail.value
    }, this.applyFilters)
  },

  // 评分筛选
  changeRating(e) {
    this.setData({
      ratingIndex: e.detail.value
    }, this.applyFilters)
  },

  // 综合筛选逻辑
  applyFilters() {
    let result = [...this.data.allCues]
    const { priceIndex, brandIndex, ratingIndex, searchKeyword } = this.data

    // 1. 价格筛选
    if (priceIndex > 0) {
      const priceRanges = [
        [0, 100],
        [100, 200],
        [200, 300],
        [300, Infinity]
      ]
      const [min, max] = priceRanges[priceIndex - 1]
      result = result.filter(item => item.price >= min && item.price <= max)
    }

    // 2. 品牌筛选
    if (brandIndex > 0) {
      const selectedBrand = this.data.brandOptions[brandIndex]
      result = result.filter(item => item.brand === selectedBrand)
    }

    // 3. 评分筛选
    if (ratingIndex > 0) {
      const minRatings = [0, 4, 3, 2]
      result = result.filter(item => item.rating >= minRatings[ratingIndex])
    }

    // 4. 关键词搜索
    if (searchKeyword) {
      const kw = searchKeyword.toLowerCase()
      result = result.filter(item => {
        return (
          item.name.toLowerCase().includes(kw) || 
          (item.brand && item.brand.toLowerCase().includes(kw))
        )
      })
    }

    this.setData({ 
      filteredCues: result,
      displayedCues: result.slice(0, this.data.pageSize),
      usedCueIds: result.slice(0, this.data.pageSize).map(cue => cue.id)
    })
  },

  // 查看详情
  viewDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url:( `/pages/cue-detail/cue-detail?id=${id}`)
    })
  }
})