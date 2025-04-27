Page({
  data: {
    location: null,
    venues: [],
    markers: [],
    activeTab: 3,
  },

  onLoad() {
    this.initLocation()
  },

  // 初始化定位
  async initLocation() {
    try {
      const res = await wx.getLocation({ type: 'gcj02' })
      console.log(res)
      this.setData({ location: res })
      this.searchVenues()
    } catch (err) {
      console.error('定位失败:', err)
    }
  },

  // 获取当前位置
  getCurrentLocation() {
    this.initLocation()
  },

  // 搜索功能
  async searchVenues() {
    try {
      // 模拟搜索结果
      const venues = [
        { id: 1, name: '球房A', distance: 500, rating: 4.5 },
        { id: 2, name: '球房B', distance: 800, rating: 4.0 },
        { id: 3, name: '球房C', distance: 1200, rating: 4.8 }
      ]
      this.setData({
        venues,
        markers: venues.map(venue => ({
          latitude: this.data.location.latitude,
          longitude: this.data.location.longitude,
          title: venue.name
        }))
      })
    } catch (err) {
      console.error('搜索失败:', err)
    }
  },

  // 查看详情
  viewDetails(e) {
    const venueId = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/venue-detail/venue-detail?id=${venueId}` })
  },

  // 切换标签
  switchTab(e) {
    const index = e.detail.index
    this.setData({ activeTab: index })
    wx.switchTab({ url: this.data.tabs[index].pagePath })
  }
})