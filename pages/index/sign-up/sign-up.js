// pages/index/sign-up/sign-up.js
import comm from '../../../utils/common.js'
import request from '../../../utils/request.js'
import url from '../../../api/user.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    signUpInfo: {
      phoneNumber: '',
      firstPassword: '',
      confirmPassword: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goToLogin: function (params) {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
  signUpInput: function (params) {
    let key = params.currentTarget.dataset.key
    let inputValue = params.detail.value
    this.data.signUpInfo[key] = inputValue
  },
  checkUserInput: function () {
    let {
      signUpInfo
    } = this.data
    let errMsg = ""
    if (signUpInfo.phoneNumber.length !== 11) {
      errMsg = "手机号有误"
    }
    if (signUpInfo.firstPassword.length < 8 || signUpInfo.firstPassword.length > 30) {
      errMsg = "密码长度有误"
    }
    if (signUpInfo.firstPassword !== signUpInfo.confirmPassword) {
      errMsg = "密码不匹配"
    }

    if (errMsg) {
      wx.showToast({
        title: errMsg,
        icon: 'error',
        duration: 2000
      })
      return false;
    } else {
      return true;
    }
  },
  async signUp() {
    if (!this.checkUserInput()) {
      return
    }
    let {
      nickName,
      avatarUrl
    } = await comm.wxGetUserProfile()
    let code = await comm.wxLogin()
    let {
      phoneNumber,
      firstPassword
    } = this.data.signUpInfo
    let req = request.post(url.userSignUpUrl, {
      phone_number: phoneNumber,
      password: firstPassword,
      code: code,
      nickname: nickName
    })
    req.then((res) => {
      comm.setToken(res.data.token_type, res.data.access_token)
      wx.switchTab({
        url: '/pages/public-ground/ground',
      })
    })
    req.catch(res => {
      let {
        detail
      } = res.data
      wx.showToast({
        title: detail,
        icon: 'error',
        duration: 2000
      })
    })

    wx.setStorage({
      key: 'nickName',
      data: nickName
    })
    wx.setStorage({
      key: 'avatarUrl',
      data: avatarUrl
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