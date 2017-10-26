Page({
  data: {

  },
  // 预览pdf
  viewPDF: function () {
    var path = 'https://api.dkjt.qeebu.com/cdn/public/uploads/2017-10-24/59ef0b1c0c2f5.pdf';
    wx.showLoading({
      title: '下载中...',
    })
    wx.downloadFile({
      url: path,
      success: function (res) {
        wx.hideLoading();
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      }
    })
  },
  // word预览
  viewWord: function () {
    var path = 'https://api.dkjt.qeebu.com/cdn/public/uploads/2017-10-26/59f1bf657730b.doc';
    wx.showLoading({
      title: '下载中...',
    })
    wx.downloadFile({
      url: path,
      success: function (res) {
        wx.hideLoading();
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      }
    })
  },
  // word预览
  viewWordX: function () {
    var path = 'https://api.dkjt.qeebu.com/cdn/public/uploads/2017-10-26/59f1bf5fd0cd2.docx';
    wx.showLoading({
      title: '下载中...',
    })
    wx.downloadFile({
      url: path,
      success: function (res) {
        wx.hideLoading();
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      }
    })
  },
  // 预览PPT
  viewPPT: function () {
    var path = 'https://api.dkjt.qeebu.com/cdn/public/uploads/2017-10-26/59f1be672d30d.ppt';
    wx.showLoading({
      title: '下载中...',
    })
    wx.downloadFile({
      url: path,
      success: function (res) {
        wx.hideLoading();
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      }
    })
  },
  // 预览PPT
  viewPPTX: function () {
    var path = 'https://api.dkjt.qeebu.com/cdn/public/uploads/2017-10-26/59f1be6154b44.pptx';
    wx.showLoading({
      title: '下载中...',
    })
    wx.downloadFile({
      url: path,
      success: function (res) {
        wx.hideLoading();
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      }
    })
  }
})