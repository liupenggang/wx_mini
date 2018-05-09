Component({
  properties: {
    listData: {
      type: Array,
      value: []
    },
    listTab: {
      type: Boolean,
      value: false
    }
  },
  data: {
    aaaa: [{
      name: 'dfafsaf'
    }]
  },
  methods: {
    handleClick: function (options) {
      let tempIndex = options.currentTarget.dataset.index
      this.triggerEvent('myevent', {index: tempIndex}, {})
    }
  }
});