const inputHelper = require('../helpers/input-helper.js');

const FILENAME = 'input.txt';
const fileContent = inputHelper.getInputArrayAsStrings(`${__dirname}/${FILENAME}`);

const solve = (input) => {
  const slopes = [
    { right: 1, down: 1 },
    { right: 3, down: 1 },
    { right: 5, down: 1 },
    { right: 7, down: 1 },
    { right: 1, down: 2 },
  ];

  const treesPerSlope = [];

  slopes.forEach((slope) => {
    let treesOfSlope = 0;

    for (let i = slope.down; i < input.length; i += slope.down) {
      if (input[i][((i / slope.down) * slope.right) % input[i].length] === '#') {
        treesOfSlope += 1;
      }
    }
    treesPerSlope.push(treesOfSlope);
  });

  return treesPerSlope.reduce((totalTrees, val) => totalTrees * val);
};

console.log(`Result: ${solve(fileContent)}`);

exports.solve = solve;
