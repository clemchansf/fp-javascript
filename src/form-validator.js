import {
  and as mustBe,
  greaterOrEqualTo as atLeast,
  equal as exactly
} from './utils/helpers.js';
/*
FP - requirement
    1. no mutation
    2. separation of data and functions
    3. use First Class Function, function return function
        i.e. currying, partial Application
*/

// original idea:
// const mustBe = (title, func, n, isCharacter, s) => {
//   if (!isCharacter(s) || !func(n)) {
//     throw Error(`must be ${title} ${n} characters`);
//   }
// };

// use currying instead
// const mustBe = validateType => validate => s => validateType(s) && validate(s);

const aCharacter = s =>
  s
    .split('')
    .every(
      c =>
        (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) ||
        (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122)
    );

const aDigit = s =>
  s.split('').every(c => c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57);

const atLeast2 = atLeast(2);
const exactly2 = exactly(2);
const exactly5 = exactly(5);

const mustBeAtLeast2Chars = mustBe(aCharacter)(atLeast2);
const mustBeExactly2Chars = mustBe(aCharacter)(exactly2);
const mustBeExactly5Digits = mustBe(aDigit)(exactly5);

const defaultCriteria = {
  firstName: [
    s => (mustBeAtLeast2Chars(s) ? '' : 'First name must be at least 2 characters')
  ],
  lastName: [
    s => (mustBeAtLeast2Chars(s) ? '' : 'Last name must be at least 2 characters')
  ],
  zipCode: [
    s => (mustBeExactly5Digits(s) ? '' : 'Zip code must be exactly 5 characters')
  ],
  state: [s => (mustBeExactly2Chars(s) ? '' : 'State must be exactly 2 characters')]
};

export const getErrorMessage = (inputs, criteria = defaultCriteria) => {
  const errors = Object.keys(inputs).reduce((acc, name) => {
    const errorBlock = criteria[name].reduce((acc, f) => [...acc, f(inputs[name])], []);
    // return [...acc, ...errorBlock];

    // improve speed
    Object.keys(errorBlock).forEach(key => {
      acc.push(errorBlock[key]);
    });
    return acc;
  }, []);

  // criteria.firstName = null; <== eslint no mutation test
  return errors.filter(e => e);
};

// module.exports = {
//   getErrorMessage,
defaultCriteria;
// };
