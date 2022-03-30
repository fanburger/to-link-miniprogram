const {
  host
} = getApp().globalData
const userLoginUrl = host + '/user/phone_login'
const userSignUpUrl = host + '/user/signup'

module.exports = {
  userLoginUrl,
  userSignUpUrl
}