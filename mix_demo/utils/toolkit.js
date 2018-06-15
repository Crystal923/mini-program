const toolkit = {
  // 网络请求的get方式
  get: function () {
    var len = arguments.length;
    if (2 == len) {
      this.request(arguments[0], 'GET', {}, arguments[1], null)
    } else if (3 == len) {
      this.request(arguments[0], 'GET', arguments[1], arguments[2], null)
    } else if (4 == len) {
      this.request(arguments[0], 'GET', arguments[1], arguments[2], arguments[3])
    }
  },
  // 网络请求的post方式
  post: function () {
    var len = arguments.length;
    if (2 == len) {
      this.request(arguments[0], 'POST', {}, arguments[1], null)
    } else if (3 == len) {
      this.request(arguments[0], 'POST', arguments[1], arguments[2], null)
    } else if (4 == len) {
      this.request(arguments[0], 'POST', arguments[1], arguments[2], arguments[3])
    }
  },
  // 网络请求的delete方式
  delete: function () {
    var len = arguments.length;
    if (2 == len) {
      this.request(arguments[0], 'DELETE', {}, arguments[1], null)
    } else if (3 == len) {
      this.request(arguments[0], 'DELETE', arguments[1], arguments[2], null)
    } else if (4 == len) {
      this.request(arguments[0], 'DELETE', arguments[1], arguments[2], arguments[3])
    }
  },
  // 网络请求put方式
  put: function () {
    var len = arguments.length;
    if (2 == len) {
      this.request(arguments[0], 'PUT', {}, arguments[1], null)
    } else if (3 == len) {
      this.request(arguments[0], 'PUT', arguments[1], arguments[2], null)
    } else if (4 == len) {
      this.request(arguments[0], 'PUT', arguments[1], arguments[2], arguments[3])
    }
  },
  request: function (url, method, data, callBack, failback) {
    wx.request({
      url: url,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: method,
      dataType: 'json',
      data: data,
      success: callBack,
      fail: failback != null ? failback : function (res) {
        wx.showToast({
          title: '网络异常',
          icon: 'none'
        })
      }
    })
  },
  showToast: function (msg) {
    this.getCuurrentPage().selectComponent('#toast').show(msg);
  },
  showModal: function (params) {
    this.getCuurrentPage().selectComponent('#' + params.id).show(params.title, params.msg, params.confirm, params.cancel, params.input);
  },
  // 开始加载更多
  startLoadMore: function () {
    this.getCuurrentPage().selectComponent('#loadmore').start();
  },
  // 关闭加载更多
  stopLoadMore: function () {
    this.getCuurrentPage().selectComponent('#loadmore').stop();
  },
  // 显示木有更多
  showLoaded: function () {
    this.getCuurrentPage().selectComponent('#loadmore').showLoaded();
  },
  // 隐藏木有更多
  hideLoaded: function () {
    this.getCuurrentPage().selectComponent('#loadmore').hideLoaded();
  },
  startLoading: function () {
    this.getCuurrentPage().selectComponent('#loading').show();
  },
  loadSuccess: function () {
    wx.stopPullDownRefresh();
    this.getCuurrentPage().setData({
      success: true
    })
    this.getCuurrentPage().selectComponent('#loading').hide();
  },
  loadFail: function (callback) {
    wx.stopPullDownRefresh();
    this.getCuurrentPage().selectComponent('#loading').error(callback);
  },
  getCuurrentPage: function () {
    let list = getCurrentPages();
    return list[list.length - 1];
  }
};
module.exports = toolkit;