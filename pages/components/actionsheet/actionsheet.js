Component({
  properties: {
    payFlag: {
      type: Boolean,
      value: false
    },
    totalMoney: {
      type: Number,
      value: 0
    },
    dataList: {
      type: Array
    }
  },
  data: {
    
  },
  methods: {
    open: function () {
      var tempList = []
      this.data.dataList.forEach((item) => {
        let tempStr = item.name + ' ' + item.num + ' ' + (item.price * item.num)
        tempList.push(tempStr)
      })
      wx.showActionSheet({
        itemList: tempList
      })
    },
    goToShop: function () {
      wx.navigateTo({
        url: '/pages/shoppingCart/shoppingCart?totalmoney=' + this.data.totalMoney + '&list=' + JSON.stringify(this.data.dataList)
      })
    },
    payMoney: function () {
      wx.showModal({
        title: '弹窗标题',
        content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
        confirmText: "确定",
        cancelText: "取消",
        success: function (res) {
          console.log(res);
          if (res.confirm) {
            console.log('用户点击了确定')
          } else {
            console.log('用户点击了取消')
          }
        }
      });
    }
  }
});