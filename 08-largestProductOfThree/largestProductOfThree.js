/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

/* START SOLUTION */
// Create a convenience function that sorts arrays ascending numerically
Array.prototype.sortAscending = function() {
  this.sort(function(a, b) {
    return a - b;
  });
  return this;
};
/* END SOLUTION */

var largestProductOfThree = function(array) {
  /* START SOLUTION */
  // Make a copy of the input array and sort it numerically
  array = array.slice().sortAscending();

  var secondFromLast = array[array.length - 2],
    thirdFromLast = array[array.length - 3];

  return Math.max(
    array[array.length - 1] * secondFromLast * thirdFromLast,
    array[array.length - 1] * array[0] * array[1]
  );

  /* END SOLUTION */
};

var largestProductOfThree = function(array) {
  // TODO: everything

  let sorted = array.sort((a, b) => a - b);
  let length = array.length;

  // three largest positive nums
  let op1 = sorted[length - 1] * sorted[length - 2] * sorted[length - 3];

  // two largest negative nums & largest positive num
  let op2 = sorted[0] * sorted[1] * sorted[length - 1];

  return op1 > op2 ? op1 : op2; // return Math.max(op1, op2);
};
