import reducers from './reducers'
import * as actions from './actions'

describe('reducers', () => {
  describe('flashCardDeleted', () => {
    it('should remove it from the list', () => {
      const state = {cards: [
        { _id: 'a' },
        { _id: 'b' },
        { _id: 'c' },
      ]}
      const action = actions.flashCardDeleted({ _id: 'b' })

      expect(reducers(state, action))
        .toEqual(
          {cards: [
            { _id: 'a' },
            { _id: 'c' },
          ]}
        )
    })
  })

  describe('flashCardCreateRequest', () => {
    it('should set a flag', () => {
      const state = {
        creatingCard: false,
      }
      const action = actions.flashCardCreateRequest({ _id: 'c' })

      expect(reducers(state, action))
        .toEqual({
          creatingCard: true,
        })
    })
  })

  describe('flashCardCreated', () => {
    it('should add it to the list', () => {
      const state = {
        creatingCard: true,
        cards: [
          { _id: 'a' },
        ],
      }
      const action = actions.flashCardCreated({ _id: 'c' })

      expect(reducers(state, action))
        .toEqual({
          creatingCard: false,
          cards: [
            { _id: 'a' },
            { _id: 'c' },
          ],
        })
    })
  })
})
