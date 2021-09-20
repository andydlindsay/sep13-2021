/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // create our piles
  // create a variable to hold the piles
  const piles = {};

  // iterate through array
  for (const num of arr) {
    // have we seen this number before
    if (piles[num]) {
      // if yes, increment the count
      piles[num] += 1;
    } else {
      // if no, establish a new key/value pair in the piles object
      piles[num] = 1;
    }
  }
  // console.log(piles);

  // analyse the piles to determine which is the highest
  // setup variables to hold the current highest value and the key assoc with that value
  let currentHighest = 0;
  let currentHighestKey = null;

  // iterate through the object (piles)
  for (const key in piles) {
    // is the value at the current key higher than our highest
    const value = piles[key];
    if (value > currentHighest) {
      // if yes, replace the highest value and key with the current key/value pair
      currentHighest = value;
      currentHighestKey = key;
    }
  }

  // return the highest key
  return Number(currentHighestKey);
};

// Don't change below:
module.exports = { mode };
