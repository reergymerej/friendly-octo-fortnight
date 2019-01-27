export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const REQUEST_FLASH_CARDS = 'REQUEST_FLASH_CARDS'

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const requestFlashCards = () => ({ type: REQUEST_FLASH_CARDS })
