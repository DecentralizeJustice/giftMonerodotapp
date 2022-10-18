import { defineStore } from 'pinia'

export const useCardStore = defineStore('cards', {
  state: () => ({ cards: [] }),
  getters: {
    incompleteCards (state) {
      const cards = state.cards
      const incompleteCards = []
      cards.forEach(element => {
        if (element.card.funded === false) {
          incompleteCards.push(element)
        }
      })
      return incompleteCards
    },
    fundedCards (state) {
      const cards = state.cards
      const fundedCards = []
      cards.forEach(element => {
        if (element.card.funded === true) {
          fundedCards.push(element)
        }
      })
      return fundedCards
    }
  },
  actions: {
    addCard (cardToAdd) {
      const cardObject = {}
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
