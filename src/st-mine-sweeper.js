import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  let result =[];
  let tempResult = [];
  let res =[];
  for (let arr = 0; arr < matrix.length; arr++) {
    for (let j = 0; j < matrix[arr].length; j++) {
      let count = 0;
      if (j > 0) {
        if (matrix[arr][j-1]) count++;
        if (arr > 0 && matrix[arr-1][j-1]) count++;
        if (arr < matrix.length -1 && matrix[arr+1][j-1]) count++;
      }
      if (j < matrix[arr].length -1){
        if (matrix[arr][j+1]) count++;
        if (arr > 0 && matrix[arr-1][j+1]) count++;
        if (arr < matrix.length -1 && matrix[arr+1][j+1]) count++;
      }
      if (arr > 0 && matrix[arr-1][j]) count++;
      if (arr < matrix.length -1 && matrix[arr+1][j]) count++;
      res.push(count);
    }
    result.push(res);
    res=[];
  }
  return result;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
