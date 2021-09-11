import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let str = '' + n;
  let max = +str.slice(1);
  let temp;
  for (let i = 1; i < str.length; i++) {
    temp = str.slice(0,i) + str.slice(i+1);
    if (temp > max) max = temp;
  }
  return +max;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
