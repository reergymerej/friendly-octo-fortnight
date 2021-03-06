import { takeEvery, all, call, put } from 'redux-saga/effects'
import * as api from './api'

import {
  FLASH_CARDS_REQUESTED,
  flashCardsReceived,
  flashCardsRequestFailure,
  FLASH_CARD_DELETE_REQUEST,
  flashCardDeleteRequestFailure,
  flashCardDeleted,
  FLASH_CARD_CREATE_REQUEST,
  flashCardCreateFailure,
  flashCardCreated,
} from './actions'

function* flashCardLoad({ tags }) {
  // TODO: handle cancel load and timeout with a race
  try {
    const cards = yield call(api.loadFlashCards, tags)
    yield put(flashCardsReceived(cards))
  } catch (e) {
    yield put(flashCardsRequestFailure())
  }
}

export function* flashCardDelete({ _id }) {
  try {
    const card = yield call(api.deleteFlashCard, _id)
    yield put(flashCardDeleted(card))
  } catch (e) {
    yield put(flashCardDeleteRequestFailure())
  }
}

export function* flashCardCreate({ card }) {
  try {
    const newCard = yield call(api.createFlashCard, card)
    yield put(flashCardCreated(newCard))
  } catch (e) {
    yield put(flashCardCreateFailure())
  }
}

function* watchFlashCards() {
  yield takeEvery(FLASH_CARDS_REQUESTED, flashCardLoad)
  yield takeEvery(FLASH_CARD_DELETE_REQUEST, flashCardDelete)
  yield takeEvery(FLASH_CARD_CREATE_REQUEST, flashCardCreate)
}

export default function* rootSaga() {
  yield all([
    watchFlashCards(),
  ])
}
