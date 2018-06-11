Component({
  properties: {
    showCancel: {
      type: Boolean
    },
    showClose: {
      type: Boolean
    },
    imgSrc: {
      type: String
    },
    title: {
      type: String
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    confirmText: {
      type: String,
      value: '确定'
    }
  },
  data: {
    showModal: false,
    content: ''
  },
  methods: {
    show(content) {
      this.setData({
        showModal: true,
        content: this._isEmpty(content) ? '' : content
      })
    },
    // 关闭模态框
    hide() {
      this.setData({
        showModal: false
      })
    },
    //触发取消回调
    _cancel() {
      this.triggerEvent("cancel")
    },
    //触发成功回调
    _confirm() {
      this.triggerEvent("confirm");
    },
    // 判断内容是否为空
    _isEmpty(msg) {
      return msg == '' || msg == undefined || msg == null;
    }
  }
})
