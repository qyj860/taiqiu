Page({
  data: {
    isLoggedIn: false,
    userInfo: {
      avatar: '',
      nickName: ''
    },
    activeTab: 4,
  },

  onLoad() {
    // 检查用户是否已登录
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.setData({
        isLoggedIn: true,
        userInfo: userInfo
      });
    }
  },

  // 微信登录
  login() {
    wx.login({
      success: (res) => {
        if (res.code) {
          // 获取用户信息
          wx.getUserInfo({
            success: (infoRes) => {
              const userInfo = infoRes.userInfo;
              this.setData({
                isLoggedIn: true,
                userInfo: {
                  avatar: userInfo.avatarUrl,
                  nickName: userInfo.nickName
                }
              });
              // 存储用户信息
              wx.setStorageSync('userInfo', {
                avatar: userInfo.avatarUrl,
                nickName: userInfo.nickName
              });
            },
            fail: (err) => {
              console.error('获取用户信息失败:', err);
              wx.showToast({
                title: '获取用户信息失败',
                icon: 'none'
              });
            }
          });
        } else {
          console.error('登录失败:', res.errMsg);
          wx.showToast({
            title: '登录失败',
            icon: 'none'
          });
        }
      },
      fail: (err) => {
        console.error('登录失败:', err);
        wx.showToast({
          title: '登录失败',
          icon: 'none'
        });
      }
    });
  },

  // 切换标签
  switchTab(e) {
    const index = e.detail.index;
    this.setData({ activeTab: index });
    wx.switchTab({ url: this.data.tabs[index].pagePath });
  }
});