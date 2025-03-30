const { sum, multiply, divide } = require("./02-math");

test("add 1 + 3 should be 4", () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test("should be 4", () => {
  const rta = multiply(1, 4);
  expect(rta).toBe(4);
});

test("divide 16 and 4 should be 4", () => {
  const rta = divide(16, 4);
  expect(rta).toBe(4);
});

test("divide by zero", () => {
  const rta = divide(16, 0);
  expect(rta).toBeNull();
});
