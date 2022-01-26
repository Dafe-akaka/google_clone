const { S } = require('xmlchars/xml/1.0/ed5');
let {artistsData} = require('../data')


class Artist {

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.sex= data.sex
        this.spotifyUrl = data.spotifyUrl;
    }

    static get all () {
        const artist = artistsData.map((artist) => new Artist(artist))
        return artist
    }

    static randomArtist(arr) {
        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);

        // get random item
        const artist = arr[randomIndex];

        const randArtist = new Artist(artist)


        return randArtist;
    }
}

module.exports = Artist
