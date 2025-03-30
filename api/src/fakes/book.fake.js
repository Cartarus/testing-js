const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  _id: faker.string.ulid(),
  name: faker.commerce.product(),
  price: faker.commerce.price(),
});

const generateManyBooks = (size = 10) => {
  const fakeBooks = [];
  for (let index = 0; index < size; index += 1) {
    fakeBooks.push(generateOneBook());
  }
  return [...fakeBooks];
};
module.exports = { generateOneBook, generateManyBooks };
