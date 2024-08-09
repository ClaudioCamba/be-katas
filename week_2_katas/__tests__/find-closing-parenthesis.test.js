const { findClosingParenthesis } = require('../find-closing-parenthesis')

describe('findClosingParenthesis()', () => {
  it('Empty string input should return -1', () => {
    // first test here
    expect(findClosingParenthesis('')).toBe(-1);
  })
  it('Input values without number should return -1', () => {
    expect(findClosingParenthesis('hello')).toBe(-1);
  })
  it('Input string with number 1 should return 6 as its the index of first closing parathesis', () => {
    expect(findClosingParenthesis('(hello)', 1)).toBe(6);
  })
  it('Input string with number 2 should return 31 as its the index of 2nd closing parathesis', () => {
    expect(findClosingParenthesis('Hello, (world). (Something Else).', 2)).toBe(31);
  })
  it('Input string with number 3 should return 35 as its the index of 3rd closing parathesis', () => {
    expect(findClosingParenthesis('Hello, (world, (foo) bar (something) else), foo (bar) cat', 3)).toBe(35);
  })
  it('Input string with number 1 should return 41 as its the index of 1st closing parathesis', () => {
    expect(findClosingParenthesis('Hello, (world, (foo) bar (something) else), foo (bar) cat', 1)).toBe(41);
  })
})
