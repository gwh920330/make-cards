//获取应用实例
const app = getApp()

Page({

  data: {},

  onLoad() {
    this.bindload();
  },

  bindload() {
    setTimeout(this.goIndex, 100000)
  },

  goIndex() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },

  onReady: function () {
    // 页面渲染完成
    console.log("test1 onReady");
    //实例化一个动画
    this.animation = wx.createAnimation({
      // 动画持续时间，单位ms，默认值 400
      duration: 400,
      /**
      * http://cubic-bezier.com/#0,0,.58,1 
      * linear 动画一直较为均匀
      * ease 从匀速到加速在到匀速
      * ease-in 缓慢到匀速
      * ease-in-out 从缓慢到匀速再到缓慢
      * 
      * http://www.tuicool.com/articles/neqMVr
      * step-start 动画一开始就跳到 100% 直到动画持续时间结束 一闪而过
      * step-end 保持 0% 的样式直到动画持续时间结束 一闪而过
      */
      timingFunction: 'ease',
      // 延迟多长时间开始
      delay: 0,
      /**
      * 以什么为基点做动画 效果自己演示
      * left,center right是水平方向取值，对应的百分值为left=0%;center=50%;right=100%
      * top center bottom是垂直方向的取值，其中top=0%;center=50%;bottom=100%
      */
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res)
      }
    })
  },
  /**
  *位移
  */
  translate: function () {
    //x轴位移100px

    this.animation.backgroundColor('#CBCBCB').step()
    this.setData({
      //输出动画
      animation: this.animation.export()
    })
  }


})