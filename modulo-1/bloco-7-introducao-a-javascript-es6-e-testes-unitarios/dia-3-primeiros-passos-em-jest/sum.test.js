const sum = require("./sum");

test("a soma de 4 e 5", () => {
  expect(sum(4, 5)).toBe(9);
});

test("a soma de 4 e 5", () => {
  expect(sum(0, 0)).toBe(0);
});