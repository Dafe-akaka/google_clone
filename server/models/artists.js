let {artistsData} = require('../data')


class Artist {

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.url = data.spotifyUrl;
    }

    static get all () {
        const artist = artistsData.map((artist) => new Artist(artist))
        return artist
    }
}

module.exports = Artist
