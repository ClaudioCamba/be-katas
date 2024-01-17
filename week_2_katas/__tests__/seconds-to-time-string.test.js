const { secondsToTimeString } = require('../seconds-to-time-string');

describe('secondsToTimeString()', () => {
  it('Input of 1 should return "1 second"', () => {
    // first test here
    expect(secondsToTimeString(1)).toBe('1 second');
  });
  it('Input of 2 should return "2 second"', () => {
    expect(secondsToTimeString(2)).toBe('2 seconds');
  });
  it('Input of 60 should return "1 minute"', () => {
    expect(secondsToTimeString(60)).toBe('1 minute');
  });
  it('Input of 121 should return "2 minutes and 1 second"', () => {
    expect(secondsToTimeString(120)).toBe('2 minutes');
  });
  it('Input of 121 should return "2 minutes and 1 second"', () => {
    expect(secondsToTimeString(121)).toBe('2 minutes and 1 second');
  });
  it('Input of 3661 should return "1 hour, 1 minute and 1 second"', () => {
    expect(secondsToTimeString(3661)).toBe('1 hour, 1 minute and 1 second');
  });
  it('Input of 31626061 should return "1 year, 1 day, 1 hour, 1 minute and 1 second"', () => {
    expect(secondsToTimeString(31626061)).toBe('1 year, 1 day, 1 hour, 1 minute and 1 second');
  });
  it('Input of 31626061 should return "4 years, 18 days, 1 hour, 2 minutes and 22 seconds"', () => {
    expect(secondsToTimeString(127702942)).toBe('4 years, 18 days, 1 hour, 2 minutes and 22 seconds');
  });
});
