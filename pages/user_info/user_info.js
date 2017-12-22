const toolkit = require('../../utils/toolkit.js'),
  api = require('../../utils/api.js');
Page({

  data: {

  },

  onLoad: function (options) {

  },
  getPhoneNumber: function (e) {
    // 事先调用wx.login()方法,获取code->换取session_key保存->这里获取到加密数据之后，结合APPID、session_key获取手机号。
    console.log('getPhoneNumber:', e);
    if (e.detail.errMsg == 'getPhoneNumber:fail user deny') { //用户拒绝获取
        wx.showModal({
          title: '提示',
          content: '用户拒绝授权啦！',
        })
    } else if (e.detail.errMsg == 'getPhoneNumber:ok') { //用户同意授权


    }
  }
})