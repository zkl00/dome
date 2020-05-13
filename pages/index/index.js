import {request,token,timestamp,member_id,shop_id,order_id} from '../../network/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false, // 显示modal弹窗
    single: false ,// false 只显示一个按钮，如果想显示两个改为true即可
    active:''
  },
  btnClick() {
    this.setData({
      showModal: true
    })
  },
  modalCancel(e) {
    // 这里面处理点击取消按钮业务逻辑
    console.log('点击了取消')
  },
  // 点击确定按钮的回调函数
  modalConfirm(e) {
    // 这里面处理点击确定按钮业务逻辑
    console.log('点击了确定')
    wx.navigateTo({
      url: '../radio/radio',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  // 存数据
    // wx.setStorageSync('list', {
    //   name:"zkl",
    //   id:"1"
    // })
    // // 取数据
    // let one = wx.getStorageSync('list')
    // console.log(one)
       this.PostList()
  },
  // 获取步骤条
  PostList(){
    request({
      url: '/orderlist/getlogisticsinfo',
      data: {
        timestamp,
        token,
        member_id,
        shop_id,
        order_id
      },
      method: 'post',
      header: {
        'POSTContent-Type': 'multipart/form-data'
      }
    }).then((res) => {
      let { code, msg } = res.data
      let { data } = res.data
      console.log(data.length)
      if (code) {
      
        data.forEach((item) => {
          item.text = item.AcceptStation
          item.desc = item.AcceptTime
          // let arrList = item.AcceptTime.split(' ')
          // item.monter = arrList[0]
          // item.time = arrList[1]
        })
        this.setData({
          dataList:data,
          active:data.length - 1
        })
      }

    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})