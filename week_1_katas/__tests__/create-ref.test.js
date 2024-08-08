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
const songs = [
  {
    track: '11:11',
    artist: 'Dinosaur Pile-Up',
    releaseYear: 2015,
    album: 'Eleven Eleven'
  },
  {
    track: 'Powder Blue',
    artist: 'Elbow',
    releaseYear: 2001,
    album: 'Asleep In The Back'
  }
];

describe('createRef', () => {
  it('Input an array with a single object should return an object with vel key and their phone number', () => {
    // first test here
    const person = [{ name: 'vel', phoneNumber: '01134445566', address: 'Northcoders, Leeds' }];
    expect(createRef(person)).toEqual({ vel:'01134445566' });
  });
  it('Input an array with multiple object should return an object with all the people and phone number', () => {
    expect(createRef(people)).toEqual({ vel:'01134445566', ant:'01612223344', mitch:'07777777777' });
  });
  it('The original array should not be mutated', () => {
    expect(createRef(people)).toEqual({ vel:'01134445566', ant:'01612223344', mitch:'07777777777' });
    expect(people).toEqual(people2);
  });
  it('Add 2 additional arguments to return object with arg1 as key and arg2 as value', () => {
    expect(createRef(people, 'name', 'phoneNumber')).toEqual({ vel:'01134445566', ant:'01612223344', mitch:'07777777777' });
    expect(createRef(people, 'name', 'address')).toEqual({ vel:'Northcoders, Leeds', ant: 'Northcoders, Manchester', mitch: null });
  });
  it('Add 2 additional arguments to return object with arg1 as key and arg2 as value', () => {
    expect(createRef(songs, 'track', 'artist')).toEqual({ '11:11': 'Dinosaur Pile-Up', 'Powder Blue': 'Elbow' });
  });
});
