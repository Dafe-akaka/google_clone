let {artistsData} = require('../data')

const Artist = require('../models/artists')

describe( 'Artist model test', () => { 

    test('it should return all artists', () => {

        const artistTest =  Artist.all;
        expect(artistTest).toEqual(artistsData)
    });

    it('should get 1 random artist', () => {
        const newArtist = Artist.randomArtist(artistsData)
        const arr = []
        arr.push(newArtist)
        expect(arr.length).toEqual(1)
    })

})
