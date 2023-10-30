const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle')

const numbers = [1, 2, 3, 4, 5];
const odd = [1,3,5,7,8];

console.log(middle(numbers, 3));
console.log(assertEqual(middle(numbers), ["3"]));
console.log(assertEqual(middle(odd), ["5"]));

