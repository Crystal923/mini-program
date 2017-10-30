const recorderManager = wx.getRecorderManager()
const options = {
  duration: 30000,
  sampleRate: 44100,
  numberOfChannels: 1,
  encodeBitRate: 192000,
  format: 'mp3',
  frameSize: 50
}
const innerAudioContext = wx.createInnerAudioContext();
innerAudioContext.autoplay = true; //加上autopaly才能在真机播放播放
Page({
  data: {
    audioPath: ''
  },
  onLoad: function (options) {

  },

  startRecord: function () {
    // 开始录音
    var that = this;
    recorderManager.start(options)
    recorderManager.onStop((res) => {
      console.log('recorder stop', res)
      that.data.audioPath = res.tempFilePath
    })
  },
  startPlay: function () {
    innerAudioContext.src = this.data.audioPath;
    innerAudioContext.play();
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    });
    innerAudioContext.onError((res) => {
      console.log('播放异常..')
      console.log(res.errMsg)
      console.log(res.errCode)
    });
  }
})