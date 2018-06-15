const toolkit = require('../../utils/toolkit.js');
Page({
  data: {
    // loading: true,
    // loadfail: false
  },
  onLoad: function () {
    let that = this;
    toolkit.startLoading();
    setTimeout(function () {
      toolkit.loadFail(function () {
        toolkit.startLoading();
        setTimeout(function(){
          toolkit.loadSuccess();
        },2500)
      });
    }, 3000)
  },
  // 吐司提示
  showToast: function () {
    toolkit.showToast('吐司');
  },
  //模态框
  showModal: function () {
    toolkit.showModal({
      id: 'modal',
      title: '温馨提示',
      msg: `<p>成功显示模态框<br/><span style="color:#ff523c;font-size:12px">这些内容换行了呢</span></p>`,
      confirm: function () {
        console.log('点击了确定');
      },
      cancel: function () {
        console.log('点击取消按钮时')
      },
      input: function (res) {
        console.log('输入的内容', res);
      }
    });
  },
  onReachBottom: function () {
    console.log('onReachBottom')
    toolkit.startLoadMore();
    setTimeout(function () {
      toolkit.showLoaded();
    }, 1000)
  }
})
