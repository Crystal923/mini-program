var list = [];
var QQMapWX = require('../../assets/qqmap-wx-jssdk.min.js');
var qqMapWX = new QQMapWX({
  key: 'FD4BZ-RDKC3-FRE3H-YRJZ5-R3LO7-6CFOJ'
})
Page({
  data: {
    addressList: []
  },
  onLoad: function (options) {
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              console.log('用户同意了位置授权');
            },
            fail: function () {
              console.log('拒绝了位置授权');
            }
          })
        }
      }
    })
    console.log('是否可用openSetting：', wx.canIUse('openSetting'));
  },
  onShow: function () {
    wx.getLocation({
      success: function (res) {
        console.log('当前位置：', res)
      },
      fail: function (res) {
        console.log('拒绝定位', res);
        wx.openSetting({

        })
      }
    })
  },
  chooseAddress: function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        console.log('选择地址：', res)
        var obj = {
          address: res.address,
          name: res.name
        }
        list.push(obj);

        that.setData({
          addressList: list
        })
      },
      fail: function (res) {
        console.log('拒绝定位', res);
        wx.openSetting({

        })
      }
    })
  },
  getUser: function (e) {
    console.log(e)
    if (e.detail.errMsg == 'getUserInfo:fail auth deny') {
      wx.openSetting({

      })
    }
  },
  getAddress: function () {
    qqMapWX.reverseGeocoder({
      location: {
        latitude: 39.91089,
        longitude: 116.51316
      },
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    })
  },
  getCityList: function () {
    qqMapWX.getCityList({
      success: function (res) {
        console.log(res.result[1]);
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });
  }
})