import { call, put } from 'redux-saga/effects'
import { flashCardDelete } from './sagas'
import * as actions from './actions'
import * as api from './api'

describe('sagas', () => {
  describe('flashCardDelete', () => {
    it('should handle success', () => {
      const action = actions.flashCardDeleteRequest('soup')
      const gen = flashCardDelete(action)

      expect(gen.next().value).toEqual(
        call(api.deleteFlashCard, 'soup')
      )

      const card = { _id: 'soup' }
      expect(gen.next(card).value).toEqual(
        put(actions.flashCardDeleted(card))
      )
    })

    it('should handle errors', () => {
      const action = actions.flashCardDeleteRequest('soup')
      const gen = flashCardDelete(action)

      expect(gen.next().value).toEqual(
        call(api.deleteFlashCard, 'soup')
      )

      expect(gen.throw({}).value).toEqual(
        put(actions.flashCardDeleteRequestFailure())
      )
    })
  })
})
