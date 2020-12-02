const inputHelper = require('../helpers/input-helper.js');

const FILENAME = 'input.txt';
const fileContent = inputHelper.getInputArrayAsStrings(`${__dirname}/${FILENAME}`);

const solve = (input) => input.reduce((validPasswords, line) => {
  const [, first, second, letter, password] = /(\d+)-(\d+) ([a-zA-Z]): ([a-zA-Z]+)/.exec(line);

  return (password[first - 1] !== letter && password[second - 1] === letter)
    || (password[first - 1] === letter && password[second - 1] !== letter)
    ? validPasswords + 1
    : validPasswords;
}, 0);

console.log(`Result: ${solve(fileContent)}`);

exports.solve = solve;
