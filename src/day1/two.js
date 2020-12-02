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
    const remainingNumbersAfterFirst = getArrayWithElementRemoved(input, i);

    for (let j = 0; j < remainingNumbersAfterFirst.length; j += 1) {
      const secondNumber = remainingNumbersAfterFirst[j];
      const remainingNumbersAfterSecond = getArrayWithElementRemoved(remainingNumbersAfterFirst, j);

      for (let k = 0; k < remainingNumbersAfterSecond.length; k += 1) {
        const thirdNumber = remainingNumbersAfterSecond[k];

        if (firstNumber + secondNumber + thirdNumber === 2020) {
          return firstNumber * secondNumber * thirdNumber;
        }
      }
    }
  }
  return null;
};

console.log(`Result: ${solve(fileContent)}`);

exports.solve = solve;
