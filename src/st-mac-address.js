import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  let arr = n.split('-').join('').split('');
  let macAdressSymbols = ['0','1','2','3','4','5','6','7','8','9','A', 'B', 'C', 'D', 'E', 'F'];
  for (let i of arr) {
    if(macAdressSymbols.indexOf(i) === -1) return false;
  }
  return true;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
