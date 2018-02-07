
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    boards: [
      { key: 'in_theaters' },
      { key: 'coming_soon' },
      { key: 'top250' }
    ],
    loading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    const promises = this.data.boards.map(board => {
      return app.douban.find(board.key, 1, 10)
        .then(d => {
          board.title = d.title
          board.movies = d.subjects
          return board
        })
    })
    Promise.all(promises).then(boards => this.setData({ boards: boards, loading: false }))
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
   
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
   
  }
})
