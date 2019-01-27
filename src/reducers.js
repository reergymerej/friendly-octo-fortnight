import {
  INCREMENT,
  DECREMENT,
  FLASH_CARDS_REQUESTED,
  FLASH_CARDS_RECEIVED,
} from './actions'

const initialState = {
  count: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }
    case FLASH_CARDS_REQUESTED:
      return {
        ...state,
        loadingFlashCards: true,
      }
    case FLASH_CARDS_RECEIVED:
      return {
        ...state,
        loadingFlashCards: false,
        cards: action.cards,
      }
    default:
      return state
  }
}
