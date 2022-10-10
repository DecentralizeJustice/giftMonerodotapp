import { defineStore } from 'pinia'

export const useDraftCardStore = defineStore('draftCard', {
  state: () => ({ test: 0, name: 'Eduardo' })
  // getters: {
  //   doubleCount: (state) => state.count * 2,
  // },
  // actions: {
  //   increment() {
  //     this.count++
  //   },
  // },
})
