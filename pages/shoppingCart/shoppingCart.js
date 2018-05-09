// pages/shoppingCart/shoppingCart.js
Page({
  data: {
    shopDataList: [],
    shopDataTotal: [],
    totalMoney: 0
  },
  onLoad: function (options) {
    if (options.list) {
      this.setData({
        shopDataList: JSON.parse(options.list),
        shopDataTotal: [{ name: '小计', price: options.totalmoney }],
        totalMoney: options.totalmoney
      })
    }
  },
  onShareAppMessage: function () {}
})