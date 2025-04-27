Component({
  properties: {
    activeTab: {
      type: Number,
      value: 0
    },
    tabs: {
      type: Array,
      value: []
    }
  },
  methods: {
    switchTab(e) {
      const index = e.currentTarget.dataset.index
      this.triggerEvent('switchtab', { index })
    }
  }
})