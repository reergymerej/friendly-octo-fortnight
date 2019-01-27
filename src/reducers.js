import * as actions from './actions'

const initialState = {
  cards: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FLASH_CARDS_REQUESTED:
      return {
        ...state,
        loadingFlashCards: true,
        flashCardLoadError: false,
      }
    case actions.FLASH_CARDS_RECEIVED:
      return {
        ...state,
        loadingFlashCards: false,
        cards: action.cards,
      }
    case actions.FLASH_CARDS_REQUEST_FAILURE:
      return {
        ...state,
        loadingFlashCards: false,
        flashCardLoadError: true,
      }
    case actions.FLASH_CARD_DELETED:
      return {
        ...state,
        cards: state.cards.filter(card => card._id !== action.card._id),
      }
    case actions.FLASH_CARD_CREATE_REQUEST:
      return {
        ...state,
        creatingCard: true,
      }
    case actions.FLASH_CARD_CREATED:
      return {
        ...state,
        creatingCard: false,
        cards: [
          ...state.cards,
          action.card,
        ],
      }
    default:
      return state
  }
}
