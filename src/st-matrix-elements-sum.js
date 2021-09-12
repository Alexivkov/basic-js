import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let sum = 0;
  let denied = [];
  for (let arr of matrix) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 0) denied.push(j);
      if (denied.indexOf(j) === -1) {
        sum += arr[j];
      }
    }
  }
  return sum;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
