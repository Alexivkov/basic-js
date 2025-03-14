import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let result = {};
  names.forEach(element => {
    if (!(element in result)) {
      result[element] = 1;
    } else {
      if (element + '(1)' in result) result[element + '(2)'] = 1;
      result[element + '(1)'] = 1;
    }
  });
  let arr = [];
  for (let i in result) {
    arr.push(i);
  }
  return arr;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
