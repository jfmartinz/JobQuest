import nextElementInList from '@/utils/nextElementInList'
import { describe } from 'vitest'

describe('nextElementInList', () => {
  it('locates element  in lists and returns the next element in lists', () => {
    const lists = ['A', 'B', 'C', 'D', 'E']
    const value = 'C'

    const result = nextElementInList(lists, value)

    expect(result).toBe('D')
  })

  describe('when element is at the end of the list', () => {
    it('locates next element at the first element in the lists', () => {
      const lists = ['A', 'B', 'C', 'D', 'E']
      const value = 'E'

      const result = nextElementInList(lists, value)

      expect(result).toBe('A')
    })
  })
})
