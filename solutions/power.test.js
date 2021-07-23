const { power } = require("./power");

describe("power numbers", () => {
  it("finds power", () => {
    expect(power("5e1e3630: what is 12 to the power of 13")).toBe('106993205379072');
  });
});
