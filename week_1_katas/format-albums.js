const formatAlbums = (albums, artistIdReference) => {
    const updatedAlbums = [];


    albums.forEach(album => {
        if (album.hasOwnProperty('artist')){
            if (artistIdReference.hasOwnProperty(album.artist)){
                updatedAlbums.push({
                    name: album.name,
                    artistId: artistIdReference[album.artist],
                    releaseYear: album.releaseYear
                })
            }
        }
    });


    return updatedAlbums;
};

module.exports = formatAlbums;
