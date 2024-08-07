const ageDog = require('../age-dog.js');

describe('ageDog', () => {
  it("Input of { name: 'Otis', age: 1 } should return the same object with age equal to 2", () => {
    // first test here
    const dog = { name: 'Otis', age: 1 };
    expect(ageDog(dog, 1)).not.toBe(dog);
    expect(ageDog(dog, 1)).toEqual({ name: 'Otis', age: 2 });
  });
  it("Input of { name: 'Otis', age: 1 } should return the same object with age equal to 6", () => {
    // first test here
    const dog = { name: 'Otis', age: 1 };
    expect(ageDog(dog, 5)).toEqual({ name: 'Otis', age: 6 });
    expect(ageDog(dog, 5)).toHaveProperty('name');
    expect(ageDog(dog, 5)).toHaveProperty('age');
  });
  it("Input num of minus, undefined and null should return object without updates", () => {
    // first test here
    const dog = { name: 'Otis', age: 1 };
    expect(ageDog(dog, -1)).not.toBe(dog);
    expect(ageDog(dog, -1)).toEqual({ name: 'Otis', age: 1 });
  });
});
