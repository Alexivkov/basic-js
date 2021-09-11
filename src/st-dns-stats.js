import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  // console.log(domains);
  let obj = {};
  for (let i of domains) {
    let arr = i.split('.');
    console.log(arr);
    let temp = '';
    for (let i = arr.length - 1; i >= 0; i--) {
      temp += '.' + arr[i];
      if(!obj[temp]) obj[temp] = 1;
      else obj[temp]++;
  }
}
  return obj;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
