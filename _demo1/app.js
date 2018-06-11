App({
  onLaunch: function () {
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            console.log('用户信息', res);
            wx.setStorageSync("avatarUrl", res.userInfo.avatarUrl);
            wx.setStorageSync('nickName', res.userInfo.nickName);
          }
        })
      }
    })
  }
})