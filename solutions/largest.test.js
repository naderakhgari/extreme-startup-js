const { largest } = require('./largest');

describe('largest', () => {
  it('finds largest', () => {
    expect(largest('55, 76, 260, 884')).toBe(884);
  })
  it('finds another largest', () => {
    expect(largest('908, 53, 490, 62')).toBe(908);
  })
});