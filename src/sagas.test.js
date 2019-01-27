import { call, put } from 'redux-saga/effects'
import { flashCardDelete, flashCardCreate } from './sagas'
import * as actions from './actions'
import * as api from './api'

describe('sagas', () => {
  describe('flashCardDelete', () => {
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
  })

  describe('flashCardCreate', () => {
    it('should handle errors', () => {
      const card = {}
      const action = actions.flashCardCreateRequest(card)
      const gen = flashCardCreate(action)

      expect(gen.next().value).toEqual(
        call(api.createFlashCard, card)
      )

      expect(gen.throw({}).value).toEqual(
        put(actions.flashCardCreateFailure())
      )
    })

    it('should handle success', () => {
      const card = {}
      const action = actions.flashCardCreateRequest(card)
      const gen = flashCardCreate(action)

      expect(gen.next().value).toEqual(
        call(api.createFlashCard, card)
      )

      const response = { _id: 'soup' }
      expect(gen.next(response).value).toEqual(
        put(actions.flashCardCreated(response))
      )
    })
  })
})
