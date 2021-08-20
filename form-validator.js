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
