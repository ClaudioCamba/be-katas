const createRef = require('../create-ref.js');
const people = [
  { name: 'vel', phoneNumber: '01134445566', address: 'Northcoders, Leeds' },
  {
    name: 'ant',
    phoneNumber: '01612223344',
    address: 'Northcoders, Manchester'
  },
  { name: 'mitch', phoneNumber: '07777777777', address: null }
];
const people2 = [
  { name: 'vel', phoneNumber: '01134445566', address: 'Northcoders, Leeds' },
  {
    name: 'ant',
    phoneNumber: '01612223344',
    address: 'Northcoders, Manchester'
  },
  { name: 'mitch', phoneNumber: '07777777777', address: null }
];

describe('createRef', () => {
  it('Input an array with a single object should return an object with vel key and their phone number', () => {
    // first test here
    const person = [{ name: 'vel', phoneNumber: '01134445566', address: 'Northcoders, Leeds' }];
    expect(createRef(person)).toEqual({ vel:'01134445566' });
  });
  it('Input an array with multiple object should return an object with all the people and phone number', () => {
    // first test here
    expect(createRef(people)).toEqual({ vel:'01134445566', ant:'01612223344', mitch:'07777777777' });
  });
  it('The original array should not be mutated', () => {
    // first test here
    expect(createRef(people)).toEqual({ vel:'01134445566', ant:'01612223344', mitch:'07777777777' });
    expect(people).toEqual(people2);
  });
});
