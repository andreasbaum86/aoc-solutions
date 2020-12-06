const inputHelper = require('../helpers/input-helper.js');

const FILENAME = 'input.txt';
const fileContent = inputHelper.getInputArrayAsStrings(`${__dirname}/${FILENAME}`);

const solve = (input) => {
  let answeredQuestions = [];
  let count = 0;

  input.forEach((line) => {
    if (line === '') {
      count += [...new Set(answeredQuestions)].length;
      answeredQuestions = [];
    } else {
      answeredQuestions = answeredQuestions.concat(line.split(''));
    }
  });
  return count;
};

console.log(`Result: ${solve(fileContent)}`);

exports.solve = solve;
