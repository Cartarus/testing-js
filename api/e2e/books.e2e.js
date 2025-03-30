const request = require('supertest');
const { MongoClient } = require('mongodb');
const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
  let app = null;
  let server = null;
  let dataBase = null;
  let client = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();

    dataBase = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close(); // Use close() instead of closeServer()
    await dataBase.dropDatabase();
    await client.close(); // Close the MongoDB connection
  });

  describe('test for [GET] /api/v1/books ', () => {
    test('should return a list of books', async () => {
      const seed = await dataBase.collection('books').insertMany([
        {
          name: 'libro 1',
          year: 1998,
          author: 'Cristian',
        },
        {
          name: 'libro 2',
          year: 1998,
          author: 'Cristian',
        },
      ]);

      console.log('seed', seed);
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          expect(body.length).toEqual(seed.insertedCount);
        });
    });
  });
});
