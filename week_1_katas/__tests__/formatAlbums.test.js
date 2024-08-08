const formatAlbums = require('../format-albums.js');

const albums = [
  { name: 'Grammatics', artist: 'Grammatics', releaseYear: 2009 },
  { name: 'Kingdom of Rust', artist: 'Doves', releaseYear: 2009 }
];

const artistIdReference = {
  Grammatics: 9923,
  Doves: 324
};

describe('formatAlbums', () => {
  it('Input albums  & artist ref variables and return array with objects containing correct artist id', () => {
    // first test here
    expect(formatAlbums(albums, artistIdReference)).toEqual([
      { name: 'Grammatics', artistId: 9923, releaseYear: 2009 },
      { name: 'Kingdom of Rust', artistId: 324, releaseYear: 2009 },
    ]);

    expect(albums).toEqual([
      { name: 'Grammatics', artist: 'Grammatics', releaseYear: 2009 },
      { name: 'Kingdom of Rust', artist: 'Doves', releaseYear: 2009 }
    ]);

    expect(artistIdReference).toEqual({
      Grammatics: 9923,
      Doves: 324
    });
  });
});
