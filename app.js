//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    wx.setStorageSync('list', {
      token: 'EEF5E0A2-D459-51DF-88E4-A255B5FD53A2',
      timestamp:'1587634934916',
      member_id: 1,
        shop_id: 5,
        order_id: 2
    }
    )
  },

  globalData: {
    userInfo: null
  }
})