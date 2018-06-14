Component({
  // 属性说明：location 组件显示的位置，默认是页面中间。可传入的值t,p。分别是t：页面的顶部，b：页面的底部
  properties: {
    location: {
      type: String
    }
  },
  data: {
    toastMsg: '',
    showToast: false,
    style: ''
  },
  methods: {
    show: function (msg) {
      if (this.data.location == 't') {
        this.setData({
          style: 'top:' + 20 + 'vh'
        })
      } else if (this.data.location == 'b') {
        this.setData({
          style: 'top:' + 65 + 'vh'
        })
      }
      this.setData({
        toastMsg: msg,
        showToast: true
      })
      setTimeout(() => {
        this.setData({
          showToast: false
        })
      }, 1500)
    }
  }
})
