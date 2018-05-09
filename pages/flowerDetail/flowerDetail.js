// pages/flowerDetail/flowerDetail.js
Page({
  data: {
    flowerNum: 0,
    flowerData: {}
  },
  onLoad: function (options) {
    this.setData({
      flowerData: options
    })
  },
  onShareAppMessage: function () {},
  lessFlowerNum: function () {
    this.setData({
      flowerNum: this.data.flowerNum - 1
    })
  },
  addFlowerNum: function () {
    this.setData({
      flowerNum: this.data.flowerNum + 1
    })
  }
})