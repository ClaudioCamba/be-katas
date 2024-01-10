const { counterIntelligence } = require('../counter-intelligence');

describe('counterIntelligence()', () => {
  it('Should return string', () => { 
    expect(typeof counterIntelligence()).toBe('string');
  });
  it('Argument of "Y" should return "X"', () => { 
    expect(counterIntelligence('Y')).toBe('X');
  });
  it('Argument of "BCD Y" should return "ABC X"', () => { 
    expect(counterIntelligence('BCD Y')).toBe('ABC X');
  });
  it('Argument of "NKRRU YCKKZNKGXZ D" should return "HELLO SWEETHEART X"', () => { 
    expect(counterIntelligence('NKRRU YCKKZNKGXZ D')).toBe('HELLO SWEETHEART X');
  });
  it('Whole sentence with multiple spaces, commas should return decoded sentence', () => { 
    const input = 'ANVNVKNA CX YRLT DY IDLLQRWR XW HXDA FJH QXVN OAXV FXAT, MJAURWP G';
    const expectedOutput = 'REMEMBER TO PICK UP ZUCCHINI ON YOUR WAY HOME FROM WORK, DARLING X';
    expect(counterIntelligence(input)).toBe(expectedOutput);
  });
  it('Whole sentence with multiple spaces, commas should return decoded sentence', () => { 
    const input = 'ngbk g toik jge :) d';
    const expectedOutput = 'HAVE A NICE DAY :) X';
    expect(counterIntelligence(input)).toBe(expectedOutput);
  });
});
