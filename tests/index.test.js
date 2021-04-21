import { knit } from '..'

test('works properly', () => {
  expect(knit([1, 2, 3], 0)).toStrictEqual([1, 0, 2, 0, 3])
})
