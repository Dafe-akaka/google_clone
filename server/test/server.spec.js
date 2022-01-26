
const request = require('supertest');

// import server
const {app} = require('../server');


describe("server", () => {

    let api 

    let testArtist = {id: 1, name:'The Weeknd' , sex: 'male', spotifyUrl: 'https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ'}

    beforeAll(() => {
        // start the server and store it in the api variable
        api = app.listen(5500, () =>
            console.log('Test server running on port 5500')
        );
    });

    afterAll((done) => {
        // close the server, then run done
        console.log('I hope you enjoyed your time, but it is time to close');
        api.close(done);
    });

    it('responds to get /artists with status 200', (done) => {
        request(api).get('/artists').expect(200, done);
    });

    it('responds to get /artists/random with status 200', (done) => {
        request(api).get('/artists/random').expect(200, done);
    });


})
