import request from '../../network/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false, // 显示modal弹窗
    single: false ,// false 只显示一个按钮，如果想显示两个改为true即可
    active:'2'
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
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  // 存数据
    wx.setStorageSync('list', {
      name:"zkl",
      id:"1"
    })
    // 取数据
    let one = wx.getStorageSync('list')
    console.log(one)
       this.PostList()
  },
  // 获取步骤条
  PostList(){
    wx.showLoading({
      title: '加载中',
    })
    request({
      url: '/orderlist/getlogisticsinfo',
      data: {
        timestamp: 1587634934916,
        token: 'EEF5E0A2-D459-51DF-88E4-A255B5FD53A2',
        member_id: 1,
        shop_id: 5,
        order_id: 2
      },
      method: 'post',
      header: {
        'POSTContent-Type': 'multipart/form-data'
      }
    }).then((res) => {
      let { code, msg } = res.data
      let { data } = res.data
      if (code) {
        wx.hideLoading()
        data.forEach((item) => {
          item.text = item.AcceptStation
          item.desc = item.AcceptTime
          // let arrList = item.AcceptTime.split(' ')
          // item.monter = arrList[0]
          // item.time = arrList[1]
        })
        this.setData({
          dataList:data
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