// const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays');
// const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const middle = require('../middle')

// const numbers = [1, 2, 3, 4, 5];
// const odd = [1,3,5,7,8];

// console.log(middle(numbers, 3));
// console.log(assertEqual(middle(numbers), ["3"]));
// console.log(assertEqual(middle(odd), ["5"]));

describe("#middle", () => {
  it("returns [3] for middle(numbers, 3)", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = middle(numbers, 3);
    assert.deepEqual(result, [3]);
  });

  it("returns ['3'] for middle(numbers)", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = middle(numbers);
    assert.deepEqual(result, ['3']);
  });

  it("returns ['5'] for middle(odd)", () => {
    const odd = [1, 3, 5, 7, 8];
    const result = middle(odd);
    assert.deepEqual(result, ['5']);
  });
});






