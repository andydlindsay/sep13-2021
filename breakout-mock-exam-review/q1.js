/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // setup a variable to hold the current lowest value
  let lowest = arr[0];

  // iterate through our list
  for (const num of arr) {
    // is the current value lower than the lowest value
    if (num < lowest) {
      // if it is, the current value will replace the lowest value
      lowest = num;
    }
  }

  // return our variable
  return lowest;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // variable to hold the current highest
  let highest = arr[0];

  // iterate through the list
  for (const num of arr) {
    // is the current value higher than our highest
    if (num > highest) {
      // if yes, replace highest with the current value
      highest = num;
    }
  }

  // return the current highest
  return highest;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const highest = max(arr);
  const lowest = min(arr);

  return highest - lowest;
};

// Don't change below:

module.exports = { min, max, range };
