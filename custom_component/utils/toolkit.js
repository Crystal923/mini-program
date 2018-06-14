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
  getCuurrentPage: function () {
    let list = getCurrentPages();
    return list[list.length - 1];
  }
};
module.exports = toolkit;