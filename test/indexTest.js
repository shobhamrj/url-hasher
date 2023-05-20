const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // Assuming your Express app is exported from a separate file
const expect = chai.expect;

chai.use(chaiHttp);

describe('API Tests', () => {
    describe('POST /api/hash-url', () => {
        // Test case 1: Create a new URL with a hashed URL
        it('should create a new URL with a hashed URL', (done) => {
            const url = 'https://www.youtube.com/';
            chai.request(app)
                .post('/api/hash-url')
                .send({ url })
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('hashedURL');
                    done();
                });
        });

        // Test case 2: Return an error when URL is missing
        it('should return an error when URL is missing', (done) => {
            chai.request(app)
                .post('/api/hash-url')
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.text).to.equal('URL Required!');
                    done();
                });
        });
    });

    describe('GET /api/hash-url/:id', () => {
        // Test case 3: Redirect to the long URL and update the counter
        it('should redirect to the long URL and update the counter', (done) => {
            const hashedURL = '264tAgSqSJ4jTrL5A6ASexfHEjhkKMqxK4bF9oqnWGc';
            chai.request(app)
                .get(`/api/hash-url/${hashedURL}`)
                .end((err, res) => {
                    expect(res).to.redirect;
                    expect(res.redirects[0]).to.equal('https://www.youtube.com/');
                    done();
                });
        });

        // Test case 4: Return an error when hashed URL is missing
        it('should return an error when hashed URL is missing', (done) => {
            const badHashedURL = '264tAgSqSJ4jTrL5A6ASexfHEjhkKMqxK4bF9oqnWG';
            chai.request(app)
                .get(`/api/hash-url/${badHashedURL}`)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.text).to.equal('Bad Request');
                    done();
                });
        });
    });
});
