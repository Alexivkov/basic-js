import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let symbolsObject = {};
  let count = 0;
  for (let i of s1) {
    if (i in symbolsObject) symbolsObject[i]++;
    else symbolsObject[i] = 1;
  }
  for (let j of s2) {
    if (j in symbolsObject && symbolsObject[j] > 0) {
      symbolsObject[j]--;
      count++;
    }
  }
  return count;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
