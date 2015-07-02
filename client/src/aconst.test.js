jest.dontMock('./aconst');

describe('action consts', () => {
  it('should have N exported constants', () => {
    let aconst = require('./aconst');

    expect(Object.keys(aconst).length).toBe(5);
  });
});
