const recorderManager = wx.getRecorderManager();
var path;

recorderManager.onStart(() => {
  console.log('recorder start')
})
recorderManager.onResume(() => {
  console.log('recorder resume')
})
recorderManager.onPause(() => {
  console.log('recorder pause')
})
recorderManager.onStop((res) => {
  console.log('recorder stop', res)
  const { tempFilePath } = res;
  path = res.tempFilePath;
})
recorderManager.onFrameRecorded((res) => {
  const { frameBuffer } = res
  console.log('frameBuffer.byteLength', frameBuffer.byteLength)
})

const options = {
  duration: 10000,
  sampleRate: 44100,
  numberOfChannels: 1,
  encodeBitRate: 192000,
  format: 'aac',
  frameSize: 50
}

const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.onPlay(() => {
  console.log('开始播放')
})
innerAudioContext.onError((res) => {
  console.log(res.errMsg)
  console.log(res.errCode)
})


Page({
  data: {
    src: '',
  },
  // 开始
  startRecord: function () {
    recorderManager.start(options)
  },
  stopRecord: function () {
    recorderManager.stop()
  },
  onShareAppMessage: function () {
    return {
      title: '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十'
    }
  },
  play: function () {
    innerAudioContext.src = path;
    // innerAudioContext.play();
    this.setData({
      src: path
    })
    this.audio = wx.createAudioContext('myAudio');
    this.audio.play();
  },
  getPhoneNumber: function () {
    wx.login({
      success: function (res) {
        console.log('成功', res)
      }
    })
    wx.getUserInfo({
      success: function (res) {
        console.log('获取信息成功', res)
      }
    })
  }
})
