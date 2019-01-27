import {
  INCREMENT,
  DECREMENT,
  REQUEST_FLASH_CARDS,
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
    case REQUEST_FLASH_CARDS:
      return {
        ...state,
        loadingFlashCards: true,
      }
    default:
      return state
  }
}
