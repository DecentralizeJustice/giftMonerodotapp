import { defineStore } from 'pinia'

export const useCardStore = defineStore('cards', {
  state: () => ({ cards: [] }),
  getters: {
    incompleteCards (state) {
      const cards = state.cards
      const incompleteCards = []
      cards.forEach(element => {
        if (element.funded === false) {
          incompleteCards.push(element)
        }
      })
      return incompleteCards
    },
    fundedCards (state) {
      const cards = state.cards
      const fundedCards = []
      cards.forEach(element => {
        if (element.funded === true) {
          fundedCards.push(element)
        }
      })
      return fundedCards
    }
  },
  actions: {
    addCard (cardToAdd) {
      this.cards.unshift(cardToAdd)
    },
    addrefundToCard (cardIndex, address) {
      this.cards[cardIndex].refundAddress = address
    },
    cardFunded (cardIndex, tx) {
      this.cards[cardIndex].fundedAt = Date.now()
      this.cards[cardIndex].expires = Date.now() + 7200000
      this.cards[cardIndex].refundTransaction = tx
      this.cards[cardIndex].funded = true
    }
  },
  persist: {
    storage: sessionStorage
  }
})
