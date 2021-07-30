const { fibonacci } = require("./fibonacci");

describe("fibonacci numbers", () => {
  it("finds fibonacci", () => {
    expect(fibonacci("7099b020: what is the 8th number in the Fibonacci sequence")).toBe('21');
  });
});
