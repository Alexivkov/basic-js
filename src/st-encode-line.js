import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let arr = str.split('');
  let temp;
  let s = '';
  while (arr.length > 0) {
    temp = arr.shift();
    let count = 1;
    while (arr[0] === temp){
      count++;
      arr.shift();
    }
    if (count !== 1) s += count + temp;
    else s += temp;
  }
  return s;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
