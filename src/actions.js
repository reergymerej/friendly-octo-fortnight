export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const FLASH_CARDS_REQUESTED = 'FLASH_CARDS_REQUESTED'
export const FLASH_CARDS_RECEIVED = 'FLASH_CARDS_RECEIVED'

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const flashCardsRequest = () => ({ type: FLASH_CARDS_REQUESTED })
export const flashCardsReceived = (cards) => ({
  type: FLASH_CARDS_RECEIVED,
  cards,
})
