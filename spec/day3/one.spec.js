const one = require('../../src/day3/one');

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

describe('Part One', () => {
  it('should return 7 trees', () => {
    expect(one.solve(input)).toEqual(7);
  });
});
