const toolkit = require('../../utils/toolkit.js'),
  api = require('../../utils/api.js'),
  WxParse = require('../../wxParse/wxParse.js');
var article;
Page({
  data: {
    url: 'http://mp.weixin.qq.com/s/8NOKX6gxYGvhxQYGyyc39A',
    linkObj: ''
  },
  onLoad: function (options) {
    var that = this,
      url = api.wechat.getLinkInfo,
      params = {
        url: that.data.url,
        need_content: 1
      };
    toolkit.post(url, params, function (res) {
      console.log('公众号解析结果：', res);
      if (res.data.code == 200) {
        article = res.data.data.content;
        that.setData({
          linkObj: res.data.data
        })
        console.log('article', article)
        WxParse.wxParse('article', 'html', article, that, 5);
      }
    })
  },
  attention: function () {
    wx.showModal({
      title: '已复制公众号"' + this.data.linkObj.title+'"',
    })
  }
})