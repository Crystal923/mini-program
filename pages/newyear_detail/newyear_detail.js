Page({

  data: {
    cardList: [
      {
        name: '第一张'
      },
      {
        name: '第二张'
      },
      {
        name: '第三张'
      },
      {
        name: '第四张'
      },
      {
        name: '第五张'
      },
      {
        name: '第六张'
      },
      {
        name: '第七张'
      }
    ],
    touchStartX: 0,
    touchEndX: 0,
    cardAnimation: {},
    currentCard: 0,
    left: '200rpx',
    top: '100rpx',
    style: ''
  },
  onLoad: function (options) {

  },
  touchStart: function (e) {
    let touchStartX = e.changedTouches[0].clientX;
    this.setData({
      touchStartX: touchStartX,
      currentCard: e.currentTarget.dataset.cardindex,
      style: ''
    })
  },
  touchMove: function (e) {
    console.log('move', e);
    this.setData({
      left: e.changedTouches[0].clientX + 'rpx',
      top: e.changedTouches[0].clientY + 'rpx',
      currentCard: e.currentTarget.dataset.cardindex,
      style: 'left:' + e.changedTouches[0].clientX + 'rpx;top:' + e.changedTouches[0].clientY + 'rpx'
    })
  },
  touchEnd: function (e) {
    console.log('touchEnd', e)
    let touchEndX = e.changedTouches[0].clientX;
    this.setData({
      touchEndX: touchEndX,
      currentCard: e.currentTarget.dataset.cardindex,
      style: ''
    })
    let distance = this.data.touchEndX - this.data.touchStartX;
    if (this.data.currentCard != 0) {
      if (distance < -10) {//向左滑
        console.log('向左滑');
        this.setData({
          cardAnimation: wx.createAnimation({ duration: 500 }).translateY(200).rotate(30).translate(-600, -300).step().export()
        })
      } else if (distance > 10) {
        console.log('向右滑');
        this.setData({
          cardAnimation: wx.createAnimation({ duration: 500 }).translateY(200).rotate(-30).translate(600, -300).step().export()
        })
      }
    }
  },
})