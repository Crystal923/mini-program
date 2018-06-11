// pages/swiper_demo/swiper_demo.js
Page({
  data: {
    currentIndex: 0
  },
  onLoad: function (options) {

  },
  swiperChange: function (e) {
    console.log(e.detail.current)
    this.setData({
      currentIndex: e.detail.current
    })
  }
})