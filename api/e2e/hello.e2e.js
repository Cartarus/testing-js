const request = require('supertest');
const createApp = require('../src/app');

describe('Hello endpoint', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close(); // Change from closeServer() to close()
  });

  describe('test for [GET] / ', () => {
    test('should return "Hello world"', () => request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual('Hello World!');
      }));
  });
});
