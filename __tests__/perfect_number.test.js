import isPerfectNumber from '../src/perfect_number';

 describe.each([
    {n: Number.MIN_SAFE_INTEGER, expected: false},
    {n: -1, expected: false},
    {n: 0, expected: false},
    {n: 1, expected: false},
    {n: 2, expected: false},
    {n: 3, expected: false},
    {n: 6, expected: true},
    {n: 28, expected: true},
    {n: 496, expected: true},
    {n: 8128, expected: true},
  ])('.isPerfectNumber($n)', ({n, expected}) => {
    test(`returns ${expected}`, () => {
      expect(isPerfectNumber(n)).toBe(expected);
    });
  });