Component({
  // 组件的对外属性，是属性名到属性设置的映射表
  properties: {
    checkbox_msg: {
      type: String
    }
  },
  // 组件的内部数据，和 properties 一同用于组件的模版渲染
  data: {},
  // 组件的方法，包括事件响应函数和任意的自定义方法
  methods: {
    checkboxChanged: function () {
      console.log('状态改变~\(≧▽≦)/~啦啦啦')
    }
  }
})