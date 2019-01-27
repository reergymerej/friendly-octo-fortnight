import { takeEvery, all, call, put } from 'redux-saga/effects'
import * as api from './api'

import {
  FLASH_CARDS_REQUESTED,
  flashCardsReceived,
  flashCardsRequestFailure,
} from './actions'

function* flashCardSaga({ tags }) {
  // TODO: handle cancel load and timeout with a race
  try {
    const cards = yield call(api.loadFlashCards, tags)
    yield put(flashCardsReceived(cards))
  } catch (e) {
    yield put(flashCardsRequestFailure())
  }
}

function* watchFlashCards() {
  yield takeEvery(FLASH_CARDS_REQUESTED, flashCardSaga)
}

export default function* rootSaga() {
  yield all([
    watchFlashCards(),
  ])
}
