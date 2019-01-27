import * as api from './api'

describe('api', () => {
  describe('getQueryForTags', () => {
    it('should handle 0 tags', () => {
      expect(api.getQueryForTags([])).toBe('')
    })

    it('should handle 1 tag', () => {
      expect(api.getQueryForTags(['bagman'])).toBe(
      '?$or[0][front.tags]=bagman&$or[1][back.tags]=bagman'
      )
    })

    it('should handle multiple tags', () => {
      expect(api.getQueryForTags(['kiss', 'greenery'])).toBe(
        [
          '?$or[0][front.tags]=kiss&$or[1][back.tags]=kiss',
          '&$or[2][front.tags]=greenery&$or[3][back.tags]=greenery',
        ].join('')
      )
    })
  })
})
