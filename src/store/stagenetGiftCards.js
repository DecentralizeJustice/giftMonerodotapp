import { defineStore } from 'pinia'

export const useCardStore = defineStore('cards', {
  state: () => ({ cards: [] }),
  getters: {
    incompleteCards: (state) => state.cards
  },
  actions: {
    addCard (cardToAdd) {
      const cardObject = {}
      cardObject.createdAt = Date.now()
      cardObject.card = cardToAdd
      this.cards.unshift(cardObject)
    },
    addrefundToCard (cardIndex, address) {
      this.cards[cardIndex].card.refundAddress = address
    },
    cardFunded (cardIndex) {
      this.cards[cardIndex].card.funded = true
    }
  },
  persist: {
    storage: sessionStorage
  }
})
