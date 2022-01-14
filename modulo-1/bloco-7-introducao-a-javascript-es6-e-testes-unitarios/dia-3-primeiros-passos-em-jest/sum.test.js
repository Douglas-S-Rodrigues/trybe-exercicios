const sum = require("./sum");

describe("testa para função sum", () => {
  it("deve retornar o resultado da soma", () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it("dispara erro quando for string", () => {
    expect(() => sum(4, "5")).toThrowError("parameters must be numbers");
  });
});
