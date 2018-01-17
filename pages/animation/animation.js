Page({

  data: {
    animationA: {},
    animationB: {},
    animationAI: {},
    animationBI: {},
    itemA: true,
    itemB: false
  },
  onLoad: function () {
    var that = this;
    this.animationA = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    this.animationA.height('498rpx').step();

    this.animationAI = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    this.animationAI.height('308rpx').step();

    this.animationB = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    this.animationB.height('298rpx').step();

    this.animationBI = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    this.animationBI.height('258rpx').step();

    this.setData({
      animationA: this.animationA.export(),
      animationB: this.animationB.export(),
      animationAI: this.animationAI.export(),
      animationBI: this.animationBI.export(),
      itemA: true,
      itemB: false
    })
  },
  itemA: function () {
    var that = this;
    if (this.data.itemA != true) {
      this.animationA = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      this.animationA.height('498rpx').step();

      this.animationAI = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      this.animationAI.height('308rpx').step();

      this.animationB = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      this.animationB.height('298rpx').step();

      this.animationBI = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      this.animationBI.height('258rpx').step();

      this.setData({
        animationA: this.animationA.export(),
        animationB: this.animationB.export(),
        animationAI: this.animationAI.export(),
        animationBI: this.animationBI.export(),
        itemA: true,
        itemB: false
      })
    }
  },
  itemB: function () {
    var that = this;
    if (this.data.itemB != true) {
      this.animationA = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',

      })
      this.animationA.height('298rpx').step();

      this.animationAI = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      this.animationAI.height('258rpx').step();

      this.animationB = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      this.animationB.height('498rpx').step();

      this.animationBI = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      this.animationBI.height('308rpx').step();

      this.setData({
        animationA: this.animationA.export(),
        animationB: this.animationB.export(),
        animationAI: this.animationAI.export(),
        animationBI: this.animationBI.export(),
        itemA: false,
        itemB: true
      })
    }
  }
})