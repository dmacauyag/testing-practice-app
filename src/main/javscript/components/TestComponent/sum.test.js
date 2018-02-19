const sum = require('./sum');

describe('the TestComponent', () => {
  it('should accept two inputs and return the correct sum', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
