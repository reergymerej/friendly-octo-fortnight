import {
  FLASH_CARDS_REQUESTED,
  FLASH_CARDS_RECEIVED,
  FLASH_CARDS_REQUEST_FAILURE,
  FLASH_CARD_DELETED,
} from './actions'

const initialState = {
  cards: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FLASH_CARDS_REQUESTED:
      return {
        ...state,
        loadingFlashCards: true,
        flashCardLoadError: false,
      }
    case FLASH_CARDS_RECEIVED:
      return {
        ...state,
        loadingFlashCards: false,
        cards: action.cards,
      }
    case FLASH_CARDS_REQUEST_FAILURE:
      return {
        ...state,
        loadingFlashCards: false,
        flashCardLoadError: true,
      }
    case FLASH_CARD_DELETED:
      return {
        ...state,
        cards: state.cards.filter(card => card._id !== action.card._id),
      }
    default:
      return state
  }
}
