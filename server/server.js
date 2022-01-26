const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())
const Artist = require('./models/artists');
const { artistsData } = require('./data');


app.get('/artists', (req, res) => {
    const allArtists = Artist.all;
    try {
        res.status(200).json(allArtists);
    } catch(err) {
        console.log(err);
        res.status(400).send({ message: `Could not get artists`});
    }

});


app.get('/artists/random', (req, res) => {
    const randArtist = Artist.randomArtist(artistsData);
    try {
        res.status(200).send(randArtist);
    } catch(err) {
        console.log(err);
        res.status(400).send({ message: `Could not get a random artists`});
    }

});



module.exports = {app}
