import { takeEvery, delay, all, call, put } from 'redux-saga/effects'
import * as API from './api'

import {
  INCREMENT,
  DECREMENT,
  FLASH_CARDS_REQUESTED,
  flashCardsReceived,
} from './actions'

function* increment() {
  yield delay(1000)
  console.log('incrementalicious')
}

function* decrement() {
  yield delay(1333)
  console.log('so decrementy')
}

function* flashCardSaga() {
  const cards = yield call(API.loadFlashCards)
  yield put(flashCardsReceived(cards))
}

function* watchFlashCards() {
  yield takeEvery(FLASH_CARDS_REQUESTED, flashCardSaga)
}

export default function* rootSaga() {
  yield all([
    takeEvery(INCREMENT, increment),
    takeEvery(DECREMENT, decrement),
    watchFlashCards(),
  ])
}
