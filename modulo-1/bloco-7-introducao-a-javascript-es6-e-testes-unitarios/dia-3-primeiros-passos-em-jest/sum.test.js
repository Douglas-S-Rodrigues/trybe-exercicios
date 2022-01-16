const sum = require("./sum.js");
const myRemove = require("./myRemove.js");

describe("testa para função sum", () => {
  it("deve retornar o resultado da soma", () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it("dispara erro quando for string", () => {
    expect(() => sum(4, "5")).toThrowError("parameters must be numbers");
  });
});

describe("testa a função myRemove", () => {
  it("deve retornar um array removendo o item correto", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
