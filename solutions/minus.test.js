const { minus } = require("./minus");

describe("minus numbers", () => {
  it("finds minus", () => {
    expect(minus("5e1e3630: what is 3 minus 5")).toBe('-2');
  });
});
