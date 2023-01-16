import { knit } from '../src'

test('works properly', () => {
  expect(knit([1, 2, 3], 0)).toStrictEqual([1, 0, 2, 0, 3])
})

test('works with empty array', () => {
  expect(knit([], {})).toStrictEqual([])
})
