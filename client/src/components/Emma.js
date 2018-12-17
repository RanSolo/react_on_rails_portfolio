import React, { Component } from 'react';
import { Container } from 'reactstrap';

console.log("/////////////// Question 1 - start///////////////");
console.log(`Question 1 (1 point, any language) Using the most appropriate
  means, implement an "isNullOrEmpty" check on the standard String type. It
  should be functionally equivalent without calling any "isNullOrEmpty" built in
  function.
`);

// input object
const question1SampulInput = {
  'actualNull': null,
  'a': 'a',
  'emptyString': '',
  'nullString': 'null' };

// returns false if the no value.
const isItNullOrIsItEmpty = function (value) {
  return !value
};

// pulls key and value out of each object and logs them
for (const [key, value] of Object.entries(question1SampulInput)) {
  console.log(`Question1 input: ${key}: `)
// console.logging the function call logs it's returned value.
  console.log(isItNullOrIsItEmpty(value))
};

console.log("/////////////// Question 2 - start///////////////");
console.log(`
  Question 2 (1 point, any language) Write a function that takes a single
  positive integer, and returns a collection / sequence (e.g. array) of
  integers. The return value should contain those integers that are ​positive
  divisors​ of the input integer.
  `);
// input number
const originalNumber = 100;
// create an array of numbers

const answers = [];

function calculateDevisors(num) {
  const numbers = Array.from(Array(num).keys());
  numbers.map( function(n) {
    if (num % n === 0) {
      answers.push(n);
      console.log(`divisible by: ${num} / ${n} = ${num / n}`);
      console.log(n);
    }
    return answers
  })
}

console.log(`Devisors Array`);
console.log(calculateDevisors(originalNumber))
// log number if original number is divisible by number being checked

// Question 2 - end
console.log("/////////////// Question 3 - start///////////////");
console.log(`
  Question 3 (1 point, any language) Write a function that takes three integer
  inputs and returns a single output. The inputs are the lengths of the sides of
  a triangle. The output is the area of that triangle.
`)
const equilateralTriangle = [10, 10, 10];
const isoscelesTriangle = [12, 10, 12];
const scaleneTriangle = [6, 10, 12];
const invalidTriangle = [-6, 10, 12];
const invalidTriangle2 = [15, 10, 2];

function validateTriangle(triangle) {
  const a = triangle[0];
  const b = triangle[1];
  const c = triangle[2];

  if ((a + b > c) && (a + c > b) && (c + b > a)) {
    return true
  } else {
    return false
  }
}

console.log(`equilateralTriangle - expected return true`);
console.log(validateTriangle(equilateralTriangle));
console.log(`isoscelesTriangle - expected return true`);
console.log(validateTriangle(isoscelesTriangle));
console.log(`scaleneTriangle - expected return true`);
console.log(validateTriangle(scaleneTriangle));
console.log(`invalidTriangle - expected return false`);
console.log(validateTriangle(invalidTriangle));
console.log(`equilateralTriangle2 - expected return true`);
console.log(validateTriangle(invalidTriangle2));
// Question 3 - end

console.log("/////////////// Question 4 - start///////////////");
var testCase1 = [1, 3, 5, 1, 1, 5, 3, 5];
var testCase2 = [1, 3, 1, 1, 5, 5, 3];

function countArrayValues(array) {
  let max = 0, maxCounts = [], counts = {};
  array.forEach(function(c) {
    counts[c] = (counts[c] || 0)+1;
    if (counts[c] > max) { max = counts[c] }
  });
  for (const [key, value] of Object.entries(counts)) {
    if (value >= max) { maxCounts.push(key) }
  };
  return maxCounts;
};

console.log('maxCounts: ');
console.log('testCase1: expected ["1", "5"]');
console.log(countArrayValues(testCase1));
console.log('testCase1: expected ["1"]');
console.log(countArrayValues(testCase2));
// Question 4 - end
console.log("/////////////// Question 7 - start///////////////");

console.log(
  `Question 7 - 2 points - Write a function which combines an array of objects,
   grouped by a key you provide (this key will correspond to a key found in the
   objects. The function will index the new object with the value of those keys.
  `
);

const users = [
  { id: 1, name: 'bob', },
  { id: 2, name: 'sally', },
  { id: 3, name: 'bob', age: 30, },
  { id: 4, name: 'steve', age: 130, },
  { id: 5, name: 'sally', age: 34, }
];

const groupedNames= {};
let nameGroup= [];
console.log(`users before:`);
console.log(users);

users.forEach(function(user) {
  nameGroup = users.filter(obj => {
    return user.name  === obj.name
  })
  groupedNames[nameGroup[0].name] = nameGroup;
});

console.log(`groupedNames:`);
console.log(groupedNames);
console.log(`Pull Bob from groupedNames with groupedNames['bob']:`);
console.log(groupedNames['bob']);
console.log(`users after:`);
console.log(users);
console.log(`//////////////////////// End ////////////////////////////////`);
class Emma extends Component {
  render() {
    return (
      <Container>
        <h1>Emma Code Challenge</h1>
        <p>Language - Javascript</p>
        <p>See Console.</p>
      </Container>
    );
  }
}

export default Emma;
