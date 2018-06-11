Component({
  properties: {
    count: {
      type: Number
    },
    maxCount: {
      type: Number
    }
  },
  data: {
    toastMsg: ''
  },
  methods: {
    minusCount: function () {
      if (this.data.count > 1) {
        this.setData({
          count: this.data.count - 1
        })
      } else {
        this.selectComponent("#toast").show('至少选择一个哦！');
      }
    },
    plusCount: function () {
      if (this.data.count < this.data.maxCount) {
        this.setData({
          count: this.data.count + 1
        })
      } else {
        this.selectComponent("#toast").show('最多选择' + this.data.maxCount + '个哦！');
      }
    }
  }
})