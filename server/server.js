const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())
const Artist = require('./models/artists');


app.get('/artists', (req, res) => {
    const quotesData = Artist.all;
    res.status(200).json(quotesData);
  });



module.exports = {app}
