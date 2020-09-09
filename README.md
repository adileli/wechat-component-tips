# wechat-component-tips
小程序提示框组件

由于小程序自带提示框组件对少数民族语言兼容性欠佳，开发的此组件。

---

# 使用方法

1.  下载到components目录中

2.    
    1. 全局安装：在`app.json` `"usingComponents"` 属性中定义 `"d-tips": "/components/tips/tips"`

    2. 在需要的页面配置文件内 `"usingComponents"` 属性中定义 `"d-tips": "/components/tips/tips"`

3.  在wxml页面引入组件 `<m-tips id="tips"></m-tips>`

4.  在js文件内`onLoad()`方法中选中组件 `this.tips = this.selectComponent('#tips')`

5.  在需要的地方调用 `this.tips.show()` or `this.tips.hide()` 方法


##### `show()` 方法支持传参 `this.tips.hide({msg: 'loading'})` `this.tips.hide({msg: 'loading', time: 3000})` `this.tips.hide({time: 0})`

##### 如果`time`值非0需要手动调用`hide`方法隐藏

# 参数

 参数 | 类型 | 必填 | 默认值 | 描述
 ---- | ----- | -----| ----- | ------ 
 msg  | String | 否 | '' | 要显示的信息 
 time | Number | 否 | 1500 | 显示时间，0为一直显示，单位：毫秒 
 icon | String | 否 | '' | 显示的icon路径，建议修改tips.wxml里默认图标


