Component({
  properties: {

  },

  data: {
    moreLoading: false,
    moreLoaded: false
  },

  methods: {
    start: function () {
      this.setData({
        moreLoading: true,
        moreLoaded: false
      })
    },
    stop: function () {
      this.setData({
        moreLoading: false,
        moreLoaded: false
      })
    },
    showLoaded: function () {
      this.setData({
        moreLoaded: true,
        moreLoading: false
      })
    },
    hideLoaded: function () {
      this.setData({
        moreLoaded: false,
        moreLoading: false
      })
    }
  }
})
