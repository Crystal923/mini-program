Page({
  data: {
    count: 1,
    maxCount: 10,
    blessAnimation: {},
    show: false,
    style: '',
    blessList: [],
    animationList: [],
    test: [{}, {}, {}, {}],
    currentIndex: 0,
    originIndex: 0
  },
  onLoad: function (options) {
  },
  showToast: function () {
    this.selectComponent('#toast').show('我只是一个吐司');
  },
  showModal: function () {
    this.selectComponent('#custom_modal').show(`您已成功<span style="color:red">提示</span>，请<span style="font-size:24px">耐心</span>等待！然而这里需要一个<br>换行,还需要一个<strong>加粗</strong>,可能还需要一个<em>斜体</em><br>1.\t你好<br>2. 不好<br>3.《JavaScript 高级教程》`);
  },
  modalCancel: function () {
    this.selectComponent('#custom_modal').hide();
  },
  modalConfirm: function () {
    this.selectComponent('#custom_modal').hide();
  },
  mClick: function (e) {
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    })
    if (this.data.originIndex != this.data.currentIndex) {
      this.setData({
        blessList: [],
        animationList: [],        
        originIndex: e.currentTarget.dataset.index
      })
    }
    console.log('currentIndexddd:', this.data.currentIndex)
  },
  sendBless: function (e) {
    console.log(e);
    // this.setData({
    //   currentIndex: e.currentTarget.dataset.index
    // })
    console.log('currentIndex:', this.data.currentIndex);
    let list = this.data.blessList;
    let style = 'left:' + (parseInt(e.changedTouches[0].clientX) - 12) + 'px;top:' + (parseInt(e.changedTouches[0].clientY) - 12) + 'px'
    console.log('style:', style);
    list.push({
      show: true,
      style: style
    })
    this.setData({
      blessList: list,
    })
    this.data.animationList.push(wx.createAnimation({ duration: 1000 }).scale(4).translate(10, -10).opacity(0).step().export());
    this.data.test[e.currentTarget.dataset.index].animationList = this.data.animationList
    this.setData({
      test: this.data.test,
      animationList: this.data.animationList
    })
  }
})