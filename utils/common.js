const wxLogin = () => {
  return new Promise((reslove) => {
    wx.login({
      success(res) {
        reslove(res.code);
      }
    })
  })
}

const wxGetUserProfile = () => {
  return new Promise(
    (reslove) => {
      wx.getUserProfile({
        desc: '获取昵称',
        success(res) {
          reslove(res.userInfo)
        }
      })
    }
  )
}

const setToken = (type, token) => {
  let authorization = `${type} ${token}`
  wx.setStorage({
    key: 'token',
    data: authorization
  })
}

module.exports = {
  wxLogin,
  wxGetUserProfile,
  setToken
}