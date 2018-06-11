var currentIndex = 1;
Page({
  data: {
    touchStartY: 0,
    touchEndY: 0,
    nextAnimation: {}
  },
  onLoad: function (options) {
  },
  touchStart: function (e) {
    let touchStartY = e.changedTouches[0].clientY;
    this.setData({
      touchStartY: touchStartY
    })
  },
  touchMove: function (e) {
  },
  touchEnd: function (e) {
    let height = wx.getSystemInfoSync().windowHeight;
    console.log('上滑or下滑', distance);
    console.log('当前页面', currentIndex);
    console.log('页面高度：', height);
    let touchEndY = e.changedTouches[0].clientY;
    this.setData({
      touchEndY: touchEndY
    })
    let distance = this.data.touchEndY - this.data.touchStartY;
    if (currentIndex <= 3) {

      switch (currentIndex) {
        case 1:
          if (distance <= -20) {
            currentIndex++;
            this.setData({
              nextAnimation: wx.createAnimation({ duration: 500 }).translateY(-height).step().export(),
              nextAnimation1: wx.createAnimation({ duration: 500 }).translateY(-height).step().export(),
              nextAnimation2: wx.createAnimation({ duration: 500 }).translateY(-height).step().export(),
              nextAnimation3: wx.createAnimation({ duration: 500 }).translateY(-height).step().export()
              //  nextAnimation: wx.createAnimation({ duration: 500 }).height(0).step().export(),
              // nextAnimation1: wx.createAnimation({ duration: 500 }).height(height).step().export()
            })
          } else if (distance >= 20) {
            this.setData({
              // nextAnimation: wx.createAnimation({ duration: 500 }).height(height).step().export(),
              // nextAnimation1: wx.createAnimation({ duration: 500 }).height(0).step().export()
              nextAnimation: wx.createAnimation({ duration: 500 }).translateY(0).step().export(),
              nextAnimation1: wx.createAnimation({ duration: 500 }).translateY(0).step().export(),
            })
          }
          break;
        case 2:
          if (distance <= -20) {
            currentIndex++;
            this.setData({
              nextAnimation1: wx.createAnimation({ duration: 500 }).translateY(-height * 2).step().export(),
              nextAnimation2: wx.createAnimation({ duration: 500 }).translateY(-height * 2).step().export(),
              nextAnimation3: wx.createAnimation({ duration: 500 }).translateY(-height * 2).step().export()
              // nextAnimation1: wx.createAnimation({ duration: 500 }).height(0).step().export(),
              // nextAnimation2: wx.createAnimation({ duration: 500 }).height(height).step().export()
            })
          } else if (distance >= 20) {
            currentIndex--;
            this.setData({
              // nextAnimation1: wx.createAnimation({ duration: 500 }).height(height).step().export(),
              // nextAnimation2: wx.createAnimation({ duration: 500 }).height(0).step().export()
              nextAnimation: wx.createAnimation({ duration: 500 }).translateY(-height).step().export(),
              nextAnimation1: wx.createAnimation({ duration: 500 }).translateY(-height).step().export(),
              nextAnimation2: wx.createAnimation({ duration: 500 }).translateY(-height).step().export(),
            })
          }
          break;
        case 3:
          if (distance <= -20) {
            this.setData({
              // nextAnimation2: wx.createAnimation({ duration: 500 }).height(0).step().export(),
              // nextAnimation3: wx.createAnimation({ duration: 500 }).height(height).step().export()
              nextAnimation2: wx.createAnimation({ duration: 500 }).translateY(-height * 3).step().export(),
              nextAnimation3: wx.createAnimation({ duration: 500 }).translateY(-height * 3).step().export()
            })
          } else if (distance >= 20) {
            currentIndex--;
            this.setData({
              // nextAnimation2: wx.createAnimation({ duration: 500 }).height(height).step().export(),
              // nextAnimation3: wx.createAnimation({ duration: 500 }).height(0).step().export()
              nextAnimation: wx.createAnimation({ duration: 500 }).translateY(-height * 2).step().export(),
              nextAnimation1: wx.createAnimation({ duration: 500 }).translateY(-height * 2).step().export(),
              nextAnimation2: wx.createAnimation({ duration: 500 }).translateY(-height * 2).step().export(),
              nextAnimation3: wx.createAnimation({ duration: 500 }).translateY(0).step().export()
            })
          }
          break;
        case 4:
          break;
      }
    }
  },
  detail: function () {
    wx.navigateTo({
      url: '../newyear_detail/newyear_detail',
    })
  }
})