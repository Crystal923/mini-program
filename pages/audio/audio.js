// 录制参数配置
const recorderManager = wx.getRecorderManager();
const options = {
  duration: 30000,
  sampleRate: 44100,
  numberOfChannels: 1,
  encodeBitRate: 192000,
  format: 'mp3',
  frameSize: 50
};

// 播放参数配置
const innerAudioContext = wx.createInnerAudioContext();
innerAudioContext.autoplay = true; //加上autopaly才能在真机播放播放
innerAudioContext.onPlay(() => {
  console.log('开始播放')
});
innerAudioContext.onError((res) => {
  console.log('播放异常..')
  console.log(res.errMsg)
  console.log(res.errCode)
});
// 工具类引入
const toolkit = require('../../utils/toolkit.js'),
  api = require('../../utils/api.js');

Page({
  data: {
    audioPath: ''
  },
  onLoad: function (options) {

  },

  // 开始录音
  startRecord: function () {
    var that = this;
    recorderManager.start(options)
    recorderManager.onStop((res) => {
      console.log('recorder stop', res)
      that.data.audioPath = res.tempFilePath
    })
  },
  //暂停录音
  pauseRecord: function () {
    recorderManager.pause();
  },
  // 继续录音
  resumeRecord: function () {
    recorderManager.resume();
  },
  // 结束录音
  stopRecord: function () {
    recorderManager.stop();
  },
  // 试听
  startPlay: function () {
    innerAudioContext.src = this.data.audioPath;
    innerAudioContext.play();
  },
  // 上传音频
  upload: function () {
    var that = this, url = api.upload.upload_file;
    wx.uploadFile({
      url: url,
      filePath: that.data.audioPath,
      name: 'file',
      formData: {
        file: 'file'
      },
      success: function (res) {
        console.log('上传完成', res)
        var json = JSON.parse(res.data);
        console.log('音频链接：', json.data.path);
        innerAudioContext.src = json.data.path;
        innerAudioContext.play();
      }
    })
  },
  // 在线音频试听
  onlinePlay: function () {
    innerAudioContext.src = 'https://api.dkjt.qeebu.com/cdn/public/uploads/2017-10-26/59f18bae5111a.aac';
    innerAudioContext.play();
  }
})