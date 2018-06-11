Page({
  data: {

  },
  onLoad: function (options) {
    const ctx = wx.createCanvasContext('myCanvas');
    let res = wx.getSystemInfoSync();
    let date = new Date();
    let prop = 750 / res.screenWidth;
    console.log('比例：', prop);
    console.log('设备信息：', res);
    ctx.drawImage('../../image/pic_bg_share.png', 0, 0, res.windowWidth, res.windowHeight);

    ctx.setFontSize(16);
    ctx.setTextAlign('center');
    ctx.fillText(wx.getStorageSync('nickName') + '祝您 : ', 127 * 2 / prop, 120 * 2 / prop);
    ctx.fillText('天天开心,事事如意！', 187 * 2 / prop, 160 * 2 / prop)
    ctx.fillText(date.getFullYear() + '-' + (parseInt(date.getMonth()) + 1) + '-' + date.getDate(), 240 * 2 / prop, 240 * 2 / prop)


    ctx.save()
    ctx.beginPath()
    ctx.arc(187 * 2 / prop, 445 * 2 / prop, 60 * 2 / prop, 0, 2 * Math.PI)
    ctx.clip()
    ctx.drawImage('../../image/qrcode.png', 127 * 2 / prop, 385 * 2 / prop, 120 * 2 / prop, 120 * 2 / prop);
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(187 * 2 / prop, 445 * 2 / prop, 28 * 2 / prop, 0, 2 * Math.PI)
    ctx.fill()
    ctx.clip()
    ctx.drawImage(wx.getStorageSync('avatarUrl'), 159 * 2 / prop, 417 * 2 / prop, 56 * 2 / prop, 56 * 2 / prop)
    ctx.restore();
    ctx.draw()

  },
  // 保存图片
  save: function () {
    console.log('长按');
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: wx.getSystemInfoSync().windowWidth,
      height: wx.getSystemInfoSync().windowHeight,
      canvasId: 'myCanvas',
      success: function (res) {
        console.log(res.tempFilePath)
        wx.previewImage({
          urls: [res.tempFilePath],
        })
      }
    })
  }
})