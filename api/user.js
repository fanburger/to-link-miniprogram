const {
  host
} = getApp().globalData
const userLoginUrl = host + '/user/phone_login'
const userSignUpUrl = host + '/user/signup'
const userWxCodeLogin = host + '/user/wx_code_login'

module.exports = {
  userLoginUrl,
  userSignUpUrl,
  userWxCodeLogin
}