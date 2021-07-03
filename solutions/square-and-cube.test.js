const { squareAndCube } = require('./square-and-cube');

describe('square and cube', () => {
  it('finds square and cube', () => {
    expect(squareAndCube(" d7f9f440: which of the following numbers is both a square and a cube: 64, 523, 988, 46656")).toBe("64");
  })
});