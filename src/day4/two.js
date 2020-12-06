const inputHelper = require('../helpers/input-helper.js');

const FILENAME = 'input.txt';
const fileContent = inputHelper.getInputArrayAsStrings(`${__dirname}/${FILENAME}`);

const getMatchingFields = (passportStr) => {
  const matchingFields = [];
  if (/byr:(19[2-9][0-9]|200[0-2])/.test(passportStr)) matchingFields.push('byr');
  if (/iyr:(201[0-9]|2020)/.test(passportStr)) matchingFields.push('iyr');
  if (/eyr:(202[0-9]|2030)/.test(passportStr)) matchingFields.push('eyr');
  if (/hgt:(1[5-8][0-9]|19[0-3])cm|(59|6[0-9]|7[0-6])in/.test(passportStr)) matchingFields.push('hgt');
  if (/hcl:(#[0-9a-f]{6})/.test(passportStr)) matchingFields.push('hcl');
  if (/ecl:(amb|blu|brn|gry|grn|hzl|oth)/.test(passportStr)) matchingFields.push('ecl');
  if (/pid:(\d{9})($|\s)/.test(passportStr)) matchingFields.push('pid');
  if (passportStr.includes('cid')) matchingFields.push('cid');

  return matchingFields;
};

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
      Array.prototype.push.apply(foundFields, getMatchingFields(line));
    }
  });

  return validPassports;
};

console.log(`Result: ${solve(fileContent)}`);

exports.solve = solve;
