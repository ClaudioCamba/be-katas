const { supermarketQueue } = require('../supermarket-queue')

describe('supermarketQueue()', () => {
  it('Input queue of [2, 2, 2], 1 should return 6 as there is only 1 till and 3 customers 2 min each', () => {
    // first test here
    expect(supermarketQueue([2, 2, 2], 1)).toBe(6);
  })
  it('Input queue of [2, 10], 2 should return 10 as there are 2 tills and second customer will take longest', () => {
    expect(supermarketQueue([2, 10], 2)).toBe(10);
  })
  it('Input queue of [2, 2, 2], 2 should return 4 as till 1 processess 2 customer', () => {
    expect(supermarketQueue([2, 2, 2], 2)).toBe(4);
  })
  it('Input queue of [2, 3, 10], 2 should return 12', () => {
    expect(supermarketQueue([2, 3, 10], 2)).toBe(12);
  })
  it('Input queue of [2, 3, 10], 3 should return 10', () => {
    expect(supermarketQueue([2, 3, 10], 3)).toBe(10);
  })
  it('Input queue of [4, 6, 10], 4 should return 10', () => {
    expect(supermarketQueue([4, 6, 10], 4)).toBe(10);
  })
  it('Input queue of [4, 6, 10, 6], 4 should return 10', () => {
    expect(supermarketQueue([4, 6, 10, 6], 2)).toBe(14);
  })
})
