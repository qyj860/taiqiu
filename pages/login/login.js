Page({
  data: {
    account: '',
    password: '',
    loading: false
  },

  // 账号输入
  onAccountInput(e) {
    this.setData({ account: e.detail.value.trim() })
  },

  // 密码输入
  onPasswordInput(e) {
    this.setData({ password: e.detail.value.trim() })
  },

  // 账号密码登录
  handleLogin() {
    if (!this.validateForm()) return

    this.setData({ loading: true })
    
    // 模拟登录请求
    setTimeout(() => {
      this.setData({ loading: false })
      wx.setStorageSync('userInfo', { avatarUrl: '', nickName: '' }) // 可以存储头像和昵称
      wx.setStorageSync('account', this.data.account)
      wx.setStorageSync('password', this.data.password)
      wx.reLaunch({
        url: '/pages/shoye/shoye'
      })
    }, 1500)
  },

  // 微信登录
  handleWechatLogin() {
    this.setData({ loading: true })
    
    // 模拟微信登录请求
    wx.getUserProfile({
      desc: '登录',
      success: (res) => {
        this.setData({ loading: false })
        
        // 设置账号密码为1
        wx.setStorageSync('account', '1')
        wx.setStorageSync('password', '1')
        wx.setStorageSync('userInfo', res.userInfo) // 存储微信头像和昵称
        wx.reLaunch({
          url: '/pages/shoye/shoye'
        })
      },
      fail: (err) => {
        this.setData({ loading: false })
        wx.showToast({ title: '微信登录失败', icon: 'none' })
        console.error(err)
      }
    })
  },

  // 表单验证
  validateForm() {
    const { account, password } = this.data
    
    if (!account) {
      wx.showToast({ title: '请输入账号', icon: 'none' })
      return false
    }
    
    if (!password) {
      wx.showToast({ title: '请输入密码', icon: 'none' })
      return false
    }
    
    return true
  }
})