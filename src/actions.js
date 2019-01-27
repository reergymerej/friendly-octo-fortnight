export const FLASH_CARDS_REQUESTED = 'FLASH_CARDS_REQUESTED'
export const FLASH_CARDS_RECEIVED = 'FLASH_CARDS_RECEIVED'
export const FLASH_CARDS_REQUEST_FAILURE = 'FLASH_CARDS_REQUEST_FAILURE'

export const flashCardsRequest = () => ({ type: FLASH_CARDS_REQUESTED })
export const flashCardsReceived = (cards) => ({ type: FLASH_CARDS_RECEIVED, cards })
export const flashCardsRequestFailure = () => ({ type: FLASH_CARDS_REQUEST_FAILURE })
