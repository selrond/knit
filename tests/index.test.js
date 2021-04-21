import { knit } from '../';

it('works properly', () => {
  expect(knit([1,2,3], 0)).toEqual([1,0,2,0,3]);
});
