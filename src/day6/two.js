const inputHelper = require('../helpers/input-helper.js');

const FILENAME = 'input.txt';
const fileContent = inputHelper.getInputArrayAsStrings(`${__dirname}/${FILENAME}`);

const solve = (input) => {
  let answeredQuestions = new Array(123).fill(0);
  let count = 0;
  let groupSize = 0;

  input.forEach((line) => {
    if (line === '') {
      count += answeredQuestions.filter((val) => val === groupSize).length;

      answeredQuestions = new Array(123).fill(0);
      groupSize = 0;
    } else {
      groupSize += 1;
      line.split('').forEach((char) => {
        answeredQuestions[char.charCodeAt(0)] += 1;
      });
    }
  });
  return count;
};

console.log(`Result: ${solve(fileContent)}`);

exports.solve = solve;
