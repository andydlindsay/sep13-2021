/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */

const q0Funcs = require('./q0');
console.log(q0Funcs);

// This function is to be used by stdev. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

const stdev = function(arr) {
  // sqrt(sum((x - populationMean)^2)/numberOfValues)
  const numberOfValues = arr.length;
  const populationMean = q0Funcs.sum(arr) / numberOfValues;

  // const differences = arr.map((num) => {
  //   return num - populationMean;
  // });

  const differences = [];
  for (const num of arr) {
    const difference = num - populationMean;
    differences.push(difference);
  }

  const squares = differences.map((num) => {
    return Math.pow(num, 2);
  });

  // const squares = arr
  //   .map((num) => {
  //     return Math.pow(num - populationMean, 2);
  //   })
    // .map((num) => {
    //   return Math.pow(num, 2);
    // });

  const sumSquares = q0Funcs.sum(squares);

  const avgSquare = sumSquares / numberOfValues;

  const answer = Math.sqrt(avgSquare);

  return round(answer);
};

// Don't change below:
module.exports = { stdev };
