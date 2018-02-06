
const app=getApp()

const url=app.globalData.doubanBase

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.movieList();
  },

  movieList(){
    wx.showToast({
      title: '正在加载',
      icon:'loading',
      duration:5000
    })
    let thisPage=this;
    wx.request({
      url: url,
      header: {
        "Content-Type":"json"
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        thisPage.setData({
          movies:res.data.subjects
        })
        console.log(res.data.subjects)
        wx.hideLoading();
      },
      fail: function(res) {},
      complete: function(res) {}
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