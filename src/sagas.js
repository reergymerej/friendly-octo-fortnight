import { takeEvery, all, call, put } from 'redux-saga/effects'
import * as API from './api'

import {
  FLASH_CARDS_REQUESTED,
  flashCardsReceived,
  flashCardsRequestFailure,
} from './actions'

function* flashCardSaga() {
  try {
    const cards = yield call(API.loadFlashCards)
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
