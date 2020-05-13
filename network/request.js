import {
  baseURL
} from './baser'

// 缓存token 
export const {
  token,
  timestamp,
  member_id,
  shop_id,
  order_id
} = wx.getStorageSync('list')

// 请求
export function request(confing) {

  return new Promise((resolve, error) => {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: baseURL + confing.url,
      header: confing.header || {},
      data: confing.data || {},
      method: confing.method || get,
      success: res => {
        let {
          code,
          msg
        } = res.data
        if (code) {
          resolve(res)
          wx.hideLoading()
        } else {
          wx.hideLoading()
          wx.showToast({
            title: msg,
            icon: "none",
            duration: 3000
          })
        }

      },
      fail: function (err) {
        error(err)
      },
    })
  })
}