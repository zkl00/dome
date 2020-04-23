
import {baseURL} from './baser'
export default function request(confing){
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