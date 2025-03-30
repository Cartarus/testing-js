//asserts o matchers

test("Test object", () => {
  const data = {
    name: "Cristian",
  };

  data.lastName = "Guerrero";

  expect(data).toEqual({
    name: "Cristian",
    lastName: "Guerrero",
  });
});

test("Null", () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test("booleans", () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect("").toBeFalsy();
  expect(false).toBeFalsy();
});

test("Strings", () => {
  expect("Christoph").toMatch(/stop/);
});

test('List / arrays', () => {
  const numbers = [0, 1, 2, 3];
  expect(numbers).toContain(2)
})
