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
})
