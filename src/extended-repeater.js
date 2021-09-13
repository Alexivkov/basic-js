import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  console.log('str=', str);
  console.log(options);
  let additionSeparatorWithAddition;
  let strWithAddition;
  let additionSeparatorWithAdditionTimes;
  let arr = []; 
  let additionSeparator;
  if (options['additionRepeatTimes']) {
    if (!options['additionSeparator']) additionSeparator = '|';
    else additionSeparator = options['additionSeparator'];
    additionSeparatorWithAddition = additionSeparator + options['addition'];
    console.log('ASWA', additionSeparatorWithAddition);
    additionSeparatorWithAdditionTimes = additionSeparatorWithAddition.repeat(options['additionRepeatTimes']);
    console.log('additionSeparatorWithAdditionTimes', additionSeparatorWithAdditionTimes);
  }
  if (options['addition']) strWithAddition = str + options['addition'];
  else strWithAddition = str;
  console.log('strWithAddition', strWithAddition);
  for ( let i = 0; i < options['repeatTimes']; i++) {
    arr.push(strWithAddition);
  }
  if (arr.length === 0) return strWithAddition;
  console.log(arr);
  let separator;
  if (!options['separator']) separator = '+';
  else separator = options['separator'];
  console.log(arr.join(separator));
  return arr.join(separator);
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
