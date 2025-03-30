const { generateManyBooks } = require('../fakes/book.fake');
const BookService = require('./books.service');

const mockSpyGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockSpyGetAll,
  create: () => {},
})));

describe('Pruebas para books service', () => {
  let service;

  beforeEach(() => {
    service = new BookService();
    jest.clearAllMocks();
  });

  describe('test getBooks', () => {
    test('Sould return a list of books', async () => {
      const fakeBooks = generateManyBooks(20);
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks({});
      console.log(books);
      expect(books.length).toEqual(20);
      expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
      expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
    });

    test('Sould return a list book', async () => {
      const fakeBooks = generateManyBooks(3);

      mockSpyGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks();
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
