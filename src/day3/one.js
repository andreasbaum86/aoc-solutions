const inputHelper = require('../helpers/input-helper.js');

const FILENAME = 'input.txt';
const fileContent = inputHelper.getInputArrayAsStrings(`${__dirname}/${FILENAME}`);

const solve = (input) => {
  let totalTrees = 0;

  for (let i = 1; i < input.length; i += 1) {
    if (input[i][(i * 3) % input[i].length] === '#') {
      totalTrees += 1;
    }
  }

  return totalTrees;
};

console.log(`Result: ${solve(fileContent)}`);

exports.solve = solve;
