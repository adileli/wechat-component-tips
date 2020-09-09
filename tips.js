// components/tips/tips.js
const defaultData = {
    show: false,
    msg: '',
    time: 1500
  }
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    show(options) {
      options.show = true
      options = Object.assign({}, defaultData, options)
      this.setData(options, () => {
        if (options.time == 0) return;
        let t = setTimeout(() => {
          this.hide()
          clearTimeout(t)
        }, options.time)
      })
    },
    hide() {
      console.info(this.data, defaultData)

      this.setData(defaultData)
    }
  }
})
