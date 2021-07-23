const { plus, plus3 } = require('./plus');

describe('adds numbers', () => {
  it('finds sum', () => {
    expect(plus("5d146be0: what is 11 plus 5")).toBe("16");
  })
  it('finds sum', () => {
    expect(plus3("9febf5e0: what is 3 plus 2 plus 1")).toBe("6");
  })
});