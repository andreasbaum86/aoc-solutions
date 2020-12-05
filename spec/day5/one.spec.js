const one = require('../../src/day5/one');

describe('Part One', () => {
  it('should return seat ID 567', () => {
    const input = ['BFFFBBFRRR'];
    expect(one.solve(input)).toEqual(567);
  });

  it('should return seat ID 119', () => {
    const input = ['FFFBBBFRRR'];
    expect(one.solve(input)).toEqual(119);
  });

  it('should return seat ID 820', () => {
    const input = ['BBFFBBFRLL'];
    expect(one.solve(input)).toEqual(820);
  });
});
