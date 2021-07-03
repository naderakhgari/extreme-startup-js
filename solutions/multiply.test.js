const { multiply } = require('./multiply');

describe('plus', () => {
  it('finds product', () => {
    expect(multiply("93403080: what is 5 multiplied by 3")).toBe("15");
  })
});