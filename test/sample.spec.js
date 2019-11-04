/* eslint-disable no-undef */
const add = (a, b) => a + b;

describe('Addition functionality', () => {
  it('adds two numbers', () => {
    expect(add(2, 2)).toEqual(4);
  });
});
