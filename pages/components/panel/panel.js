Component({
  properties: {
    listData: {
      type: Array,
      value: []
    },
    flowerNum: {
      type: Object,
      value: {}
    }
  },
  data: {},
  methods: {
    lessFlowerNum: function (options) {
      let tempIndex = options.currentTarget.dataset.index,
        tempItem = options.currentTarget.dataset.item
      this.data.flowerNum[tempIndex] = this.data.flowerNum[tempIndex] - 1
      this.setData({
        flowerNum: this.data.flowerNum
      })
      this.triggerEvent('lessnum', { item: tempItem }, {})
    },
    addFlowerNum: function (options) {
      let tempIndex = options.currentTarget.dataset.index,
        tempItem = options.currentTarget.dataset.item
      if (this.data.flowerNum[tempIndex]) {
        this.data.flowerNum[tempIndex] = this.data.flowerNum[tempIndex] + 1
      } else {
        this.data.flowerNum[tempIndex] = 1
      }
      this.setData({
        flowerNum: this.data.flowerNum
      })
      this.triggerEvent('addnum', { item: tempItem }, {})
    }
  }
});