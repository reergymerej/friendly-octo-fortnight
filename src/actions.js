export const FLASH_CARDS_REQUESTED = 'FLASH_CARDS_REQUESTED'
export const FLASH_CARDS_RECEIVED = 'FLASH_CARDS_RECEIVED'
export const FLASH_CARDS_REQUEST_FAILURE = 'FLASH_CARDS_REQUEST_FAILURE'

export const flashCardsRequest = (tags) => ({ type: FLASH_CARDS_REQUESTED, tags })
export const flashCardsReceived = (cards) => ({ type: FLASH_CARDS_RECEIVED, cards })
export const flashCardsRequestFailure = () => ({ type: FLASH_CARDS_REQUEST_FAILURE })

export const FLASH_CARD_DELETE_REQUEST = 'FLASH_CARD_DELETE_REQUEST'
export const FLASH_CARD_DELETED = 'FLASH_CARD_DELETED'
export const FLASH_CARD_DELETE_REQUEST_FAILURE = 'FLASH_CARD_DELETE_REQUEST_FAILURE'

export const flashCardDeleteRequest = (_id) => ({ type: FLASH_CARD_DELETE_REQUEST, _id })
export const flashCardDeleted = (card) => ({ type: FLASH_CARD_DELETED, card })
export const flashCardDeleteRequestFailure = () => ({ type: FLASH_CARD_DELETE_REQUEST_FAILURE })

export const FLASH_CARD_CREATE_REQUEST = 'FLASH_CARD_CREATE_REQUEST'
export const FLASH_CARD_CREATED = 'FLASH_CARD_CREATED'
export const FLASH_CARD_CREATE_FALURE = 'FLASH_CARD_CREATE_FALURE'

export const flashCardCreateRequest = (card) => ({ type: FLASH_CARD_CREATE_REQUEST, card })
export const flashCardCreated = (card) => ({ type: FLASH_CARD_CREATED, card })
export const flashCardCreateFailure = () => ({ type: FLASH_CARD_CREATE_FALURE })
