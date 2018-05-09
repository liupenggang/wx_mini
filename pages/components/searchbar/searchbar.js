Component({
  properties: {
    text: {
      type: String,
      value: '456789567'
    }
  },
  data: {
    inputShowed: false,
    inputVal: ""
  },
  methods: {
    showInput: function () {
      this.setData({
        inputShowed: true
      });
    },
    hideInput: function () {
      this.triggerEvent('cancelsearch', {}, {})
      this.setData({
        inputVal: "",
        inputShowed: false
      });
    },
    clearInput: function () {
      this.setData({
        inputVal: ""
      });
    },
    inputTyping: function (e) {
      console.log(e.detail.value)
      let value = e.detail.value
      this.triggerEvent('handlesearch', { searchValue: value }, {})
    }
  }
});