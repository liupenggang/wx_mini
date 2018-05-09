// pages/flowerList/flowerList.js
let util = require('../../utils/data.js')
let listIndex = 0
Page({
  data: {
    totalMoney: 0,
    choiceList: [],
    clearChoiceList: {}
  },
  onLoad: function (options) {
    this.setData({
      flowerData: util.flowerListNav,
      flowerList: util.flowerListNav[listIndex].list
    })
  },
  onShareAppMessage: function () {},
  flowerDataClick: function (options) {
    listIndex = options.detail.index
    this.setData({
      flowerList: util.flowerListNav[listIndex].list,
      clearChoiceList: {}
    })
  },
  flowerDateSearch: function (options) {
    let searchValue = options.detail.searchValue,
    searchDataList = []
    for (var i=0; i<this.data.flowerData.length; i++) {
      var curData = this.data.flowerData[i]
      for (var j = 0; j < curData.list.length; j++) {
        var tempList = curData.list[j]
        if (tempList.name.indexOf(searchValue) != -1) {
          searchDataList.push(tempList)
        }
      }
    }
    this.setData({
      flowerList: searchDataList
    })
  },
  cancelSearch: function () {
    this.setData({
      flowerList: util.flowerListNav[listIndex].list
    })
  },
  addShopping: function (options) {
    let tempData = options.detail.item,
      tempPrice = this.data.totalMoney + tempData.price,
      tempChoiceData = {},
      nameFlag = false
    if (this.data.choiceList.length === 0) {
      this.data.choiceList.push({ name: tempData.name, num: 1, price: tempData.price })
    } else {
      for (let i = 0; i < this.data.choiceList.length; i++) {
        let curData = this.data.choiceList[i]
        if (curData.name === tempData.name) {
          nameFlag = true
          this.data.choiceList[i].num = this.data.choiceList[i].num + 1
        }
      }
      if (!nameFlag) {
        this.data.choiceList.push({ name: tempData.name, num: 1, price: tempData.price })
      }
    }
    this.setData({
      totalMoney: tempPrice,
      choiceList: this.data.choiceList
    })
  },
  lessShopping: function (options) {
    let tempData = options.detail.item,
      tempPrice = this.data.totalMoney - tempData.price
    for (let i = 0; i < this.data.choiceList.length; i++) {
      let curData = this.data.choiceList[i]
      if (curData.name === tempData.name) {
        curData.num = curData.num - 1
        if (curData.num === 0) this.data.choiceList.splice(i, 1)
      }
    }
    this.setData({
      totalMoney: tempPrice,
      choiceList: this.data.choiceList
    })
  },
  testRequest: function () {
    wx.request({
      url: 'https://wxapi.weiyunyi.com/Wap.php/Fitment/gettype',
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      data: { wxappid: '6' },
      success: function (res) {
        console.log(res.data)
      },
      fail: function (err) {
        console.log(err)
      }
    })
  }
})