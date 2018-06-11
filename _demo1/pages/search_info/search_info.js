const json = require('../../utils/json.js');
Page({
  data: {
    infoList: [],
    mineMsg: '',
    inputValue: '',
    currentIndex: 0
  },
  onLoad: function (options) {

  },
  mineMsgChange: function (e) {
    this.setData({
      mineMsg: e.detail.value
    })
  },
  sendMsg: function () {
    if (this.data.mineMsg.length != 0) {
      var list = this.data.infoList;
      var aList = json.answerList;
      list.push({ source: 1, msg: this.data.mineMsg })
      for (var i = 0; i < aList.length; i++) {
        if (aList[i].title.toUpperCase().indexOf(this.data.mineMsg.toUpperCase()) != -1) {
          list.push({ source: 2, msg: aList[i].content });
        }
      }
      this.setData({
        infoList: list,
        inputValue: '',
        mineMsg: '',
        currentIndex: list.length - 1
      })
    } else {
      this.selectComponent('#toast').show('发送内容不能为空');
    }
  }
})