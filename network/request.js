
import {baseURL} from './baser'

// 缓存token 
export const {token,timestamp,member_id,shop_id,order_id} = wx.getStorageSync('list')

// 请求
export  function request(confing){
  return new Promise((resolve,error)=>{
    wx.request({
      url:baseURL+confing.url,
      header:confing.header||{},
      data:confing.data || {},
      method:confing.method || get,
      success:res=>{
        resolve(res)
      },
      fail:function(error){
        error(error)
      },
    })
  })
}