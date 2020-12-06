const inputHelper = require('../helpers/input-helper.js');

const FILENAME = 'input.txt';
const fileContent = inputHelper.getInputArrayAsStrings(`${__dirname}/${FILENAME}`);

const solve = (input) => {
  let foundFields = [];
  let validPassports = 0;

  input.forEach((line) => {
    if (line === '') {
      if (foundFields.length === 8 || (foundFields.length === 7 && foundFields.indexOf('cid') === -1)) {
        validPassports += 1;
      }
      foundFields = [];
    } else {
      line.split(' ').forEach((field) => {
        foundFields.push(field.split(':')[0]);
      });
    }
  });

  return validPassports;
};

console.log(`Result: ${solve(fileContent)}`);

exports.solve = solve;
