const two = require('../../src/day3/two');

const input = [
  '..##.......',
  '#...#...#..',
  '.#....#..#.',
  '..#.#...#.#',
  '.#...##..#.',
  '..#.##.....',
  '.#.#.#....#',
  '.#........#',
  '#.##...#...',
  '#...##....#',
  '.#..#...#.#',
];

describe('Part Two', () => {
  it('should return 336', () => {
    expect(two.solve(input)).toEqual(336);
  });
});
