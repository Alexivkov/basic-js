import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let str = '';
  let temp;
  let obj = {
    '--discard-next':0,
    '--discard-prev':0,
    '--double-next':0,
    '--double-prev':0
  }
  for (let i = 0; i < arr.length; i++) {
      if (i < arr.length - 1 && arr[i] === '--discard-next') i++;
      }
      return str;
  
  
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
