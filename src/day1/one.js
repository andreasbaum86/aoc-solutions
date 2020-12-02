const inputHelper = require('../helpers/input-helper.js');

const FILENAME = 'input.txt';
const fileContent = inputHelper.getInputArrayAsNumbers(`${__dirname}/${FILENAME}`);

const getArrayWithElementRemoved = (arr, index) => {
  const remaining = [...arr];
  remaining.splice(index, 1);

  return remaining;
};

const solve = (input) => {
  for (let i = 0; i < input.length; i += 1) {
    const firstNumber = input[i];
    const remainingNumbers = getArrayWithElementRemoved(input, i);

    const secondNumber = 2020 - firstNumber;

    if (remainingNumbers.filter((val) => val === secondNumber).length === 1) {
      return firstNumber * secondNumber;
    }
  }
  return null;
};

console.log(`Result: ${solve(fileContent)}`);

exports.solve = solve;
