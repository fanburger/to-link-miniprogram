// pages/requirements-center/requirements-center.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: '',
    cards: [{
        type: 'teammate_recruit',
        id: 'asdfasdf',
        comp_name: '挑战杯全国大学生竞赛',
        comp_time: {
          start: '2022.3',
          end: '2022.5'
        },
        num_of_people: {
          recrui: 4,
          apply: 14,
          joined: 3
        }
      },
      {
        type: 'out_food',
        id: '345345342',
        publisher_name: '李同学',
        status: '取物中',
        address: {
          start_position: '军工路580门口',
          end_position: '四公寓2号楼717'
        },
        order_shortcut_url: '/img/order.jpg'
      },{
        type: 'teammate_recruit',
        id: 'asdfasdf',
        comp_name: 'MathorCup数学建模比赛',
        comp_time: {
          start: '2022.3',
          end: '2022.5'
        },
        num_of_people: {
          recrui: 5,
          apply: 14,
          joined: 5
        }
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onChange(e) {
    this.data.searchValue = e.detail
  },
  onSearch(e) {
    console.log('onSearch', e)
  },
  onClick() {
    console.log('onClick')
  },
  onLoad: function (options) {

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