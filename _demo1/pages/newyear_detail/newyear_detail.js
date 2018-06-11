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
      },
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
        name: '最后一张'
      }
    ],
    touchStartX: 0,
    touchEndX: 0,
    cardAnimation: [],
    currentCard: 0,
    left: '',
    top: '',
    style: ''
  },
  onLoad: function (options) {
    this.setData({
      cardList: this.data.cardList.reverse()
    })
    var a = []; for (var n = 0; n < this.data.cardList.length; n++) a[n] = 0;
    this.setData({
      cardAnimation: a
    })
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
      style: 'left:' + e.changedTouches[0].clientX + 'rpx;top:' + e.changedTouches[0].clientY + 'rpx',
    })
  },
  touchEnd: function (e) {
    console.log('touchEnd', e)
    let touchEndX = e.changedTouches[0].clientX;
    this.setData({
      touchEndX: touchEndX,
      currentCard: e.currentTarget.dataset.cardindex
    })
    let distance = this.data.touchEndX - this.data.touchStartX;
    if (this.data.currentCard != 0) {
      if (distance < -10) {//向左滑
        console.log('向左滑');
        let currentAnimation = wx.createAnimation({ duration: 500 }).rotate(30).translate(-600, -300).width(0).height(0).step().export();
        this.data.cardAnimation.splice(this.data.currentCard, 1, currentAnimation);
        this.setData({
          cardAnimation: this.data.cardAnimation
        })
      } else if (distance > 10) {
        console.log('向右滑');
        let currentAnimation = wx.createAnimation({ duration: 500 }).rotate(-30).translate(600, -300).width(0).height(0).step().export();
        this.data.cardAnimation.splice(this.data.currentCard, 1, currentAnimation);
        this.setData({
          cardAnimation: this.data.cardAnimation
        })
      }
    }
  }
})