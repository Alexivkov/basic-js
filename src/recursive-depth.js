import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  
  calculateDepth(arr) {
    console.log('arr', arr);
    let res = [];
    let count = 0;
    while(arr.length > 0){
      for (let i of arr) {
        if (Array.isArray(i)) {
          if(i.length === 0) res.push(1);
          for (let j of i){
            res.push(j);
          }
        }
      }
      count++;
      console.log('count', count);
      console.log('res', res);
      arr = res;
      res = [];
    }
    return count;
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
