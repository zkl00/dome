// pages/radio/radio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioList: [
      {
        name: "中国",
        id: "1"
      },
      {
        name: "美国",
        id: "2"
      },
    ],
    value:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // this.countList()
  },
  changgeList(e) {
    let value = e.detail
    this.setData({
      value
    })

  },
  countList() {
    let id = this.data.value//输入框的id
    let arr = this.data.radioList //data的列表
    let index = arr.findIndex(item => item.id == id)
  //  console.log(arr.reduce((item)=>item.id == id))
  // console.log(arr.find((item)=>item.id == id))

    if (index === -1) {
      this.setData({
        flay: 2
      })
    } else {
      this.setData({
        flay: 1
      })
    }

   

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