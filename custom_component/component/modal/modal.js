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
    showInput: {
      type: Boolean
    },
    placeholder: {
      type: String,
      value: '请输入优惠券数量'
    },
    inputType: {
      type: String,
      value: 'number'
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
    title: '',
    content: '',
    confirm: '',
    cancel: '',
    input: '',
    inputValue: ''
  },
  methods: {
    show(title, content, confirm, cancel, input) {
      this.setData({
        showModal: true,
        title: title,
        content: this._isEmpty(content) ? '' : content,
        confirm: confirm,
        cancel: cancel,
        input: input
      })
    },
    // 关闭模态框
    _hide() {
      this.setData({
        showModal: false,
        inputValue: ''
      })
    },
    // 获取输入框内容
    _getCount(e) {
      var that = this;
      var val = e.detail.value; //通过这个传递数据
      that.setData({
        inputValue: val
      })
      var myEventDetail = {
        val: val
      } // detail对象，提供给事件监听函数
      that.data.input(val);
      that.triggerEvent('getcount', myEventDetail) //myevent自定义名称事件，父组件中使用
    },
    //触发取消回调
    _cancel() {
      this._hide();
      this.data.cancel();
    },
    //触发成功回调
    _confirm() {
      this._hide();
      this.data.confirm();
    },
    // 判断内容是否为空
    _isEmpty(msg) {
      return msg == '' || msg == undefined || msg == null;
    }
  }
})
