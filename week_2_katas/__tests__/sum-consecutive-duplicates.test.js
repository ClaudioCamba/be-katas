const { sumConsecutiveDuplicates, reduceConsecutives } = require('../sum-consecutive-duplicates');

describe('sumConsecutiveDuplicates()', () => {
  it('3 consecutive numbers not consecutive duplicate should return the same input numbers', () => {
    // first test here
    expect(sumConsecutiveDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
  });
  it('1 consecutive duplicate number should return array with consecutive duplicates added', () => {
    expect(sumConsecutiveDuplicates([1, 1, 2, 3])).toEqual([2, 2, 3]);
  });
  it('2 consecutive duplicate number should return array with consecutive duplicates added', () => {
    expect(sumConsecutiveDuplicates([1, 1, 2, 2, 3, 3])).toEqual([2, 4, 6]);
  });
  it('3 consecutive duplicate number should return array with consecutive duplicates added', () => {
    expect(sumConsecutiveDuplicates([1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1])).toEqual([2, 2, 4, 2, 3]);
  });
});

describe('sumConsecutiveDuplicates()', () => {
  it('reduces array until there are no more consecutive duplicates', () => {
    expect(reduceConsecutives([1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1])).toEqual([8, 2, 3]);
  });
});