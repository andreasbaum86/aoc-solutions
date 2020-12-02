const inputHelper = require('../helpers/input-helper.js');

const FILENAME = 'input.txt';
const fileContent = inputHelper.getInputArrayAsStrings(`${__dirname}/${FILENAME}`);

const solve = (input) => input.reduce((validPasswords, line) => {
  const [, min, max, letter, password] = /(\d+)-(\d+) ([a-zA-Z]): ([a-zA-Z]+)/.exec(line);

  const letterCount = password.split('').filter((char) => char === letter).length;

  return letterCount >= min && letterCount <= max ? validPasswords + 1 : validPasswords;
}, 0);

console.log(`Result: ${solve(fileContent)}`);

exports.solve = solve;
