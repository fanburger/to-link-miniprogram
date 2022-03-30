import comm from '../../utils/common.js'
import url from '../../api/user.js'

Page({
  data: {
    loginField: {
      account: '',
      password: ''
    }
  },
  onLoad() {},
  userInput: function (params) {
    // 保存用户输入的信息
    let key = params.currentTarget.dataset.key
    let inputValue = params.detail.value
    this.data.loginField[key] = inputValue
  },
  loginByAccount: function () {
    let {
      account,
      password
    } = this.data.loginField
    wx.request({
      url: url.userLoginUrl,
      method: 'POST',
      data: {
        username: account,
        password: password
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        console.log(res);
        if (res.data.detail) {
          wx.showToast({
            title: '请检查输入',
            icon: 'error',
            duration: 2000
          })
        }
        if (res.data.access_token) {
          comm.setToken(res.data.token_type, res.data.access_token)
          wx.switchTab({
            url: '/pages/public-ground/ground',
          })
        }
      }
    })
  },
  goToSignUp: function () {
    wx.redirectTo({
      url: '/pages/index/sign-up/sign-up',
    })
  }
})