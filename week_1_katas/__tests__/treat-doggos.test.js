const treatDoggos = require('../treat-doggos.js');

describe('treatDoggos', () => {
  it('Input dog array with 1 dog object, return new array with dog object hasRabies key to false', () => {
    // first test here
    const dogs = [{ name: 'Otis', age: 3, hasRabies: true }];
    expect(treatDoggos(dogs)).not.toBe(dogs);
    expect(treatDoggos(dogs)).toEqual([{ name: 'Otis', age: 3, hasRabies: false }]);
  });
  it('Input dog array with 1 dog object, return new array with dog object hasRabies key to false', () => {
    const dogs = [{ name: 'Otis', age: 3, hasRabies: true }];
    const newDogs = treatDoggos(dogs);
    expect(newDogs !== dogs).toBe(true);
  });
  it('Input dog array with 2 dog object, return new array with dog object hasRabies key to false', () => {
    const dogs = [{ name: 'Otis', age: 3, hasRabies: true }, { name: 'Ted', age: 6, hasRabies: true }];
    expect(treatDoggos(dogs)).not.toBe(dogs);
    expect(treatDoggos(dogs)).toEqual(dogs);
  });
});