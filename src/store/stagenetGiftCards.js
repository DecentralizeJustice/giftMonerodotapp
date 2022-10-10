import { defineStore } from 'pinia'

export const useCardStore = defineStore('cards', {
  state: () => ({ cards: [] }),
  // getters: {
  //   doubleCount: (state) => state.count * 2,
  // },
  actions: {
    addCard (cardToAdd) {
      const cardObject = {}
      cardObject.createdAt = Date.now()
      cardObject.card = cardToAdd
      this.cards.unshift(cardObject)
    }
  },
  persist: {
    storage: sessionStorage
  }
})
