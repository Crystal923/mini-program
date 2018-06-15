Component({
  properties: {

  },
  data: {
    loading: false,
    loadfail: false,
    errorCallback: ''
  },
  methods: {
    show: function () {
      this.setData({
        loading: true,
        loadfail: false
      })
    },
    hide: function () {
      this.setData({
        loading: false,
        loadfail: false
      })
    },
    error: function (callback) {
      this.setData({
        loading: false,
        loadfail: true,
        errorCallback: callback
      })
    },
    _reload: function () {
      this.data.errorCallback();
    }
  }
})
