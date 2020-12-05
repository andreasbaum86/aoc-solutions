const inputHelper = require('../helpers/input-helper.js');

const FILENAME = 'input.txt';
const fileContent = inputHelper.getInputArrayAsStrings(`${__dirname}/${FILENAME}`);

const getSeat = (rowsRange, colsRange, strLeft) => {
  if (strLeft.length === 0) {
    return [rowsRange, colsRange];
  }

  const currentLetter = strLeft[0];
  const nextLetter = strLeft.length > 1 ? strLeft[1] : '';

  const remainingStr = strLeft.substring(1);
  const isLastRowLetter = ['F', 'B'].includes(currentLetter) && ['L', 'R'].includes(nextLetter);

  switch (currentLetter) {
    case 'F':
      if (isLastRowLetter) return getSeat(rowsRange[0], colsRange, remainingStr, currentLetter);
      return getSeat(
        [rowsRange[0], rowsRange[1] - Math.ceil((rowsRange[1] - rowsRange[0]) / 2)],
        colsRange,
        remainingStr,
        currentLetter,
      );
    case 'B':
      if (isLastRowLetter) return getSeat(rowsRange[1], colsRange, remainingStr, currentLetter);
      return getSeat(
        [rowsRange[0] + Math.ceil((rowsRange[1] - rowsRange[0]) / 2), rowsRange[1]],
        colsRange,
        remainingStr,
        currentLetter,
      );
    case 'L':
      if (strLeft.length === 1) {
        return getSeat(rowsRange, colsRange[0], remainingStr, currentLetter);
      }
      return getSeat(
        rowsRange,
        [colsRange[0], colsRange[1] - Math.ceil((colsRange[1] - colsRange[0]) / 2)],
        remainingStr,
        currentLetter,
      );
    case 'R':
      if (strLeft.length === 1) {
        return getSeat(rowsRange, colsRange[1], remainingStr, currentLetter);
      }
      return getSeat(
        rowsRange,
        [colsRange[0] + Math.ceil((colsRange[1] - colsRange[0]) / 2), colsRange[1]],
        remainingStr,
        currentLetter,
      );
    default:
  }
  return null;
};

const getSeatIdsDesc = (input) => {
  const seatIds = [];

  input.forEach((line) => {
    const seats = getSeat([0, 127], [0, 7], line);
    seatIds.push(seats[0] * 8 + seats[1]);
    seatIds.sort((a, b) => b - a);
  });

  return seatIds;
};

const findMySeat = (seatIds) => {
  for (let i = 0; i < seatIds.length - 1; i += 1) {
    if (seatIds[i] - seatIds[i + 1] === 2) {
      return seatIds[i] - 1;
    }
  }

  return null;
};

const solve = (input) => findMySeat(getSeatIdsDesc(input));

console.log(`Result: ${solve(fileContent)}`);

exports.solve = solve;
